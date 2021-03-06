import React, {Component} from 'react';
import './App.css';

interface KeyListenerProps{
    returnBoard(board: number[][]): void,
    returnScore(score: number): void,
    board: number[][],
    baseNum: number
}

interface KeyListenerState{
    score: number,
    board: number[][]
}

class KeyListener extends Component<KeyListenerProps, KeyListenerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            score: 0,
            board: []
        };
    }

    componentDidMount() {
        // when key is pressed
        document.addEventListener('keydown', event => {
            if(event.key === "ArrowDown") this.moveDown()
            if(event.key === "ArrowUp") this.moveUp()
            if(event.key === "ArrowLeft") this.moveLeft()
            if(event.key === "ArrowRight") this.moveRight()
        });
    }

    moveDown() {
        const newBoard = this.state.board;
        let hasMoved = false;
        let winFlag = 1;
        let prev = -99;

         for(let j = 0; j < 4; j++) {
             prev = -99;
             for(let i = 2; i >= 0; i--) {
                if(newBoard[i][j] !== 0) {
                    // keep shifting down
                    let k = i;

                    // find the lowest empty space
                    while( k+1 !== 4 && newBoard[k+1][j] === 0) {
                        k++;
                    }

                    // Combine numbers if they're the same.
                    if(k+1 < 4 && k+1 !== i && newBoard[k+1][j] === newBoard[i][j] && k+1 !== prev) {
                        newBoard[k+1][j] = newBoard[k+1][j]*2;
                        if(newBoard[k+1][j] === this.props.baseNum * Math.pow(2, 10)) winFlag = -1;
                        this.setState({
                            score : this.state.score + newBoard[k+1][j] * winFlag
                        });
                        newBoard[i][j] = 0;
                        hasMoved = true;
                        prev = k+1;
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
        const newBoard = this.state.board;
        let hasMoved = false;
        let winFlag = 1;
        let prev = -99;

        for(let j = 0; j < 4; j++) {
            prev = -99;
            for(let i = 1; i <= 3; i++) {
                if(newBoard[i][j] !== 0) {
                    let k = i;

                    // find the highest empty space
                    //We need to stop kevin's racism - I concur!
                    while(k-1 !== -1 && newBoard[k-1][j] === 0) {
                        k--;
                    }

                    // Combine numbers if they're the same.
                    if(k-1 > -1 && k-1 !== i && newBoard[k-1][j] === newBoard[i][j] && k-1 !== prev) {
                        newBoard[k-1][j] = newBoard[k-1][j]*2;
                        if(newBoard[k-1][j] === this.props.baseNum * Math.pow(2, 10)) winFlag = -1;
                        this.setState({
                            score : this.state.score + newBoard[k-1][j] * winFlag
                        });
                        newBoard[i][j] = 0;
                        hasMoved = true;
                        prev = k-1;
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
        const newBoard = this.state.board;
        let hasMoved = false;
        let winFlag = 1;
        let prev = -99;

        for(let i = 0; i < 4; i++) {
            prev = -99;
            for(let j = 1; j <= 3; j++) {
                if(newBoard[i][j] !== 0) {
                    let k = j;

                    // find the highest empty space
                    //We need to stop kevin's racism - I concur!
                    while(k-1 !== -1 && newBoard[i][k-1] === 0) {
                        k--;
                    }

                    // Combine numbers if they're the same.
                    if(k-1 > -1 && k-1 !== j && newBoard[i][k-1] === newBoard[i][j] && k-1 !== prev) {
                        newBoard[i][k-1] = newBoard[i][k-1]*2;
                        if(newBoard[i][k-1] === this.props.baseNum * Math.pow(2, 10)) winFlag = -1;
                        this.setState({
                            score : this.state.score + newBoard[i][k-1] * winFlag
                        });
                        newBoard[i][j] = 0;
                        hasMoved = true;
                        prev = k-1;
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
        const newBoard = this.state.board
        let hasMoved = false;
        let winFlag = 1;
        let prev = -99;

        for(let i = 0; i < 4; i++) {
            prev = -99;
            for(let j = 2; j >= 0; j--) {
                if(newBoard[i][j] !== 0) {
                    let k = j;

                    // find the highest empty space
                    //We need to stop kevin's racism - I concur!
                    while(k+1 !== 4 && newBoard[i][k+1] === 0) {
                        k++;
                    }

                    // Combine numbers if they're the same.
                    if(k+1 < 4 && k+1 !== j && newBoard[i][k+1] === newBoard[i][j] && k+1 !== prev) {
                        newBoard[i][k+1] = newBoard[i][k+1]*2;
                        if(newBoard[i][k+1] === this.props.baseNum * Math.pow(2, 10)) winFlag = -1;
                        this.setState({
                           score : this.state.score + newBoard[i][k+1] * winFlag
                        });
                        newBoard[i][j] = 0;
                        hasMoved = true;
                        prev = k+1;
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
        this.props.returnBoard(newBoard);
        this.props.returnScore(this.state.score);
    }

    propRecieved(){
        if(this.props.board.length === 0){
            let newBoard = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
            this.setState({
                board: newBoard,
                score: 0
            });
            this.addNumber(newBoard);
            this.addNumber(newBoard);
            this.props.returnScore(0);
        }
        return <div/>
    }

    render() {
        return(this.propRecieved());
    }
}

export default KeyListener;