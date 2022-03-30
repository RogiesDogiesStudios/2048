import React, {Component} from 'react';

interface KeyListenerProps{
    onChange(board: number[][]): void;
    board: number[][]
}

interface KeyListenerState{
    full: boolean
}

class KeyListener extends Component<KeyListenerProps, KeyListenerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            full: false
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
       let newBoard = this.props.board;
         for(let i = 2; i >= 0; i--) {
             for(let j = 0; j < 4; j++) {
                if(newBoard[i][j] !== 0) {
                    // keep shifting down
                    let k = i;

                    // find the lowest empty space
                    //We need to stop kevin's racism - I concur!
                    while( k+1 !== 4 && newBoard[k+1][j] === 0) {
                        k++;
                    }

                    // Combine numbers if they're the same.
                    if(k+1 < 4 && k+1 !== i && newBoard[k+1][j] === newBoard[i][j]) {
                        newBoard[k+1][j] = newBoard[k+1][j]*2;
                        newBoard[i][j] = 0;
                    }
                    else { // Just bring it to the first empty spot.
                        if(k != i) {
                            newBoard[k][j] = newBoard[i][j];
                            newBoard[i][j] = 0;
                        }
                    }
                }
             }
         }
        this.addNumber(newBoard);
    }

    moveUp() {
        let newBoard = this.props.board;
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
                        newBoard[i][j] = 0;
                    }
                    else { // Just bring it to the first empty spot.
                        if(k != i) {
                            newBoard[k][j] = newBoard[i][j];
                            newBoard[i][j] = 0;
                        }
                    }
                }
            }
        }
        this.addNumber(newBoard);
    }

    moveLeft() {
        let newBoard = this.props.board;
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
                        newBoard[i][j] = 0;
                    }
                    else { // Just bring it to the first empty spot.
                        if(k != j) {
                            newBoard[i][k] = newBoard[i][j];
                            newBoard[i][j] = 0;
                        }
                    }
                }
            }
        }
        this.addNumber(newBoard);
    }

    moveRight() {
        let newBoard = this.props.board;
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
                        newBoard[i][j] = 0;
                    }
                    else { // Just bring it to the first empty spot.
                        if(k != j) {
                            newBoard[i][k] = newBoard[i][j];
                            newBoard[i][j] = 0;
                        }
                    }
                }
            }
        }
        this.addNumber(newBoard);
    }

    addNumber(newBoard: number[][]){
        let index1,index2;

        //Find a random empty index
        do {
            index1 = Math.ceil(Math.random() * 4) - 1
            index2 = Math.ceil(Math.random() * 4) - 1
        } while(newBoard[index1][index2] != 0);

        //Set value of empty index to 2 or 4
        if(Math.random() > .1)
            newBoard[index1][index2] = 2;
        else
            newBoard[index1][index2] = 4;

        //return newBoard to App
        this.props.onChange(newBoard);
    }

    render() {
        return("THIS IS JUST A TEST!");
    }
}

export default KeyListener;