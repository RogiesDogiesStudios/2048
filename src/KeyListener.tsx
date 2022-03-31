import React, {Component} from 'react';
import './App.css';

interface KeyListenerProps{
    onChange(board: number[][]): void,
    board: number[][],
    baseNum: number
}

interface KeyListenerState{
    score: number
}

class KeyListener extends Component<KeyListenerProps, KeyListenerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            score: 0,
        };
    }

    componentDidMount() {
        this.addNumber(this.props.board);
        this.addNumber(this.props.board);
        // when key is pressed
        document.addEventListener('keydown', event => {
            if(event.key === "ArrowDown") this.moveDown()
            if(event.key === "ArrowUp") this.moveUp()
            if(event.key === "ArrowLeft") this.moveLeft()
            if(event.key === "ArrowRight") this.moveRight()
        });
    }

    moveDown() {
        const newBoard = Object.assign({}, this.props.board);
        let hasMoved = false;
         for(let i = 2; i >= 0; i--) {
             for(let j = 0; j < 4; j++) {
                if(newBoard[i][j] !== 0) {
                    // keep shifting down
                    let k = i;

                    // find the lowest empty space
                    while( k+1 !== 4 && newBoard[k+1][j] === 0) {
                        k++;
                    }

                    // Combine numbers if they're the same.
                    if(k+1 < 4 && k+1 !== i && newBoard[k+1][j] === newBoard[i][j]) {
                        newBoard[k+1][j] = newBoard[k+1][j]*2;
                        this.setState({
                            score : this.state.score + newBoard[k+1][j]
                        });
                        newBoard[i][j] = 0;
                        hasMoved = true;
                    }
                    else if(k !== i) { // Just bring it to the first empty spot.
                            newBoard[k][j] = newBoard[i][j];
                            newBoard[i][j] = 0;
                            hasMoved = true;
                    }
                }
             }
         }
        if(hasMoved) this.addNumber(newBoard);
    }

    moveUp() {
        const newBoard = Object.assign({}, this.props.board);
        let hasMoved = false;
        for(let i = 1; i <= 3; i++) {
            for(let j = 0; j < 4; j++) {
                if(newBoard[i][j] !== 0) {
                    let k = i;

                    // find the highest empty space
                    //We need to stop kevin's racism - I concur!
                    while(k-1 !== -1 && newBoard[k-1][j] === 0) {
                        k--;
                    }

                    // Combine numbers if they're the same.
                    if(k-1 > -1 && k-1 !== i && newBoard[k-1][j] === newBoard[i][j]) {
                        newBoard[k-1][j] = newBoard[k-1][j]*2;
                        this.setState({
                            score : this.state.score + newBoard[k-1][j]
                        });
                        newBoard[i][j] = 0;
                        hasMoved = true;
                    }
                    else if(k !== i) { // Just bring it to the first empty spot.
                            newBoard[k][j] = newBoard[i][j];
                            newBoard[i][j] = 0;
                            hasMoved = true;
                    }
                }
            }
        }
        if(hasMoved) this.addNumber(newBoard);
    }

    moveLeft() {
        const newBoard = Object.assign({}, this.props.board);
        let hasMoved = false;
        for(let j = 1; j <= 3; j++) {
            for(let i = 0; i < 4; i++) {
                if(newBoard[i][j] !== 0) {
                    let k = j;

                    // find the highest empty space
                    //We need to stop kevin's racism - I concur!
                    while(k-1 !== -1 && newBoard[i][k-1] === 0) {
                        k--;
                    }

                    // Combine numbers if they're the same.
                    if(k-1 > -1 && k-1 !== j && newBoard[i][k-1] === newBoard[i][j]) {
                        newBoard[i][k-1] = newBoard[i][k-1]*2;
                        this.setState({
                            score : this.state.score + newBoard[i][k-1]
                        });
                        newBoard[i][j] = 0;
                        hasMoved = true;
                    }
                    else if(k !== j) { // Just bring it to the first empty spot.
                            newBoard[i][k] = newBoard[i][j];
                            newBoard[i][j] = 0;
                            hasMoved = true;
                    }
                }
            }
        }
        if(hasMoved) this.addNumber(newBoard);
    }

    moveRight() {
        const newBoard = Object.assign({}, this.props.board);
        let hasMoved = false;
        for(let j = 2; j >= 0; j--) {
            for(let i = 0; i < 4; i++) {
                if(newBoard[i][j] !== 0) {
                    let k = j;

                    // find the highest empty space
                    //We need to stop kevin's racism - I concur!
                    while(k+1 !== 4 && newBoard[i][k+1] === 0) {
                        k++;
                    }

                    // Combine numbers if they're the same.
                    if(k+1 < 4 && k+1 !== j && newBoard[i][k+1] === newBoard[i][j]) {
                        newBoard[i][k+1] = newBoard[i][k+1]*2;
                        this.setState({
                           score : this.state.score + newBoard[i][k+1]
                        });
                        newBoard[i][j] = 0;
                        hasMoved = true;
                    }
                    else if(k !== j) {// Just bring it to the first empty spot.
                            newBoard[i][k] = newBoard[i][j];
                            newBoard[i][j] = 0;
                            hasMoved = true;
                    }
                }
            }
        }

        if(hasMoved) this.addNumber(newBoard);
    }

    addNumber(newBoard: number[][]){
        console.log(this.state.score)
        let index1,index2;

        //Find a random empty index
        do {
            index1 = Math.ceil(Math.random() * 4) - 1
            index2 = Math.ceil(Math.random() * 4) - 1
        } while(newBoard[index1][index2] !== 0);

        //Set value of empty index to 2 or 4
        if(Math.random() > .1)
            newBoard[index1][index2] = this.props.baseNum;
        else
            newBoard[index1][index2] = this.props.baseNum*2;

        //return newBoard to App
        this.props.onChange(newBoard);
        if(this.loseCon(newBoard)) alert("You Lost!");
    }

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
        const newBoard = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];

        this.addNumber(newBoard);
        this.addNumber(newBoard);

        this.props.onChange(newBoard);
        this.setState({
            score: 0
        })
    }

    render() {
        return(
            <div>
            <div className="score">score: {this.state.score}</div>
            <div className="button"><button onClick={() => this.reset()}>New Game</button></div>
            </div>

    );
    }
}

export default KeyListener;