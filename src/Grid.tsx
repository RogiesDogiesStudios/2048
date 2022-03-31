import React, {Component} from 'react';
import './App.css';

interface GridProps {
    board: number[][]
}

class Grid extends Component<GridProps, {}> {
    constructor(props: any) {
        super(props);
    }

    getElement(row:number, col:number) {
        if(this.props.board[row][col] === 0) {
            return "";
        }
        else {
            return this.props.board[row][col];
        }
    }

    // returns a color based on value
    pickGridColor(value: number) {
        switch (value) {
            case 0:
                return 'white'
            case 2:
                return '#FFABFA'
            case 4:
                return '#FFDAAB'
            case 8:
                return '#D0FFAB'
            case 16:
                return '#FAFFAB'
            case 32:
                return '#FFABD0'
            case 64:
                return '#ABFCFF'
            case 128:
                return '#AEABFF'
            case 256:
                return '#ABD2FF'
            case 512:
                return '#E4FFAB'
            case 1024:
                return '#E6788A'
            case 2048:
                return '#D478E6'
            default:
                return '#D478E6'
        }
    }

    render() {
        // gets colors for 4x4 grid
        let gridColors: any[][];
        gridColors = [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]];
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                gridColors[i][j] = this.pickGridColor(this.props.board[i][j]);
            }
        }

        return (
            <div className="grid-container">
                <div className="grid-item" style={{
                    backgroundColor: gridColors[0][0],
                }}>{this.getElement(0, 0)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[0][1],
                }}>{this.getElement(0, 1)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[0][2],
                }}>{this.getElement(0, 2)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[0][3],
                }}>{this.getElement(0, 3)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[1][0],
                }}>{this.getElement(1, 0)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[1][1],
                }}>{this.getElement(1, 1)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[1][2],
                }}>{this.getElement(1, 2)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[1][3],
                }}>{this.getElement(1, 3)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[2][0],
                }}>{this.getElement(2, 0)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[2][1],
                }}>{this.getElement(2, 1)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[2][2],
                }}>{this.getElement(2, 2)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[2][3],
                }}>{this.getElement(2, 3)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[3][0],
                }}>{this.getElement(3, 0)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[3][1],
                }}>{this.getElement(3, 1)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[3][2],
                }}>{this.getElement(3, 2)}</div>
                <div className="grid-item" style={{
                    backgroundColor: gridColors[3][3],
                }}>{this.getElement(3, 3)}</div>
            </div>
        );
    }
}

export default Grid;