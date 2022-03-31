import React, {Component} from 'react';
import './App.css';
import Grid from './Grid';
import KeyListener from './KeyListener';

interface AppState {
    board: number[][],
    baseNum: number,
    score: number,
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
        board: [],
        baseNum: 2, // 2.0009765625 for 2049
        score: 0,
    };}

    loseCon(newBoard: number[][]) {
        //Check if a play can still be made
        for(let i = 0; i < 4; i++){
            //If there is an empty space
            if(newBoard[i].includes(0))
                return false;
            //If there are two duplicates next to each other on a row
            if(newBoard[i][0] === newBoard[i][1] || newBoard[i][1] === newBoard[i][2] || newBoard[i][2] === newBoard[i][3])
                return false;
            //If there are two duplicates next to each other in a column
            if(newBoard[0][i] === newBoard[1][i] || newBoard[1][i] === newBoard[2][i] || newBoard[2][i] === newBoard[3][i])
                return false;
        }
        return true;
    }

    reset() {
        this.setState({
            board: [],
            score: 0
        });
    }

    newBoard(newBoard: number[][]){
        this.setState({board: newBoard});
        if(this.loseCon(newBoard))
            alert("You Lose!")
    }

    newScore(newScore: number){
      console.log(newScore);
      if(newScore < 0){
          newScore *= -1
          alert("You Win!")
      }
        this.setState({score: newScore});
    }

    render() {
        return (
            <div>
                <KeyListener onChange={(val) => this.setState({board: val})} board={this.state.board} baseNum={this.state.baseNum}/>
                <Grid board={this.state.board}/>
            </div>
        );
    }
}

export default App;