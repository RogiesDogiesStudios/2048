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

    render() {
        //this.keyPressed();
        return (
            <div className="grid-container">
                <div className="grid-item">{this.getElement(0, 0)}</div>
                <div className="grid-item">{this.getElement(0, 1)}</div>
                <div className="grid-item">{this.getElement(0, 2)}</div>
                <div className="grid-item">{this.getElement(0, 3)}</div>
                <div className="grid-item">{this.getElement(1, 0)}</div>
                <div className="grid-item">{this.getElement(1, 1)}</div>
                <div className="grid-item">{this.getElement(1, 2)}</div>
                <div className="grid-item">{this.getElement(1, 3)}</div>
                <div className="grid-item">{this.getElement(2, 0)}</div>
                <div className="grid-item">{this.getElement(2, 1)}</div>
                <div className="grid-item">{this.getElement(2, 2)}</div>
                <div className="grid-item">{this.getElement(2, 3)}</div>
                <div className="grid-item">{this.getElement(3, 0)}</div>
                <div className="grid-item">{this.getElement(3, 1)}</div>
                <div className="grid-item">{this.getElement(3, 2)}</div>
                <div className="grid-item">{this.getElement(3, 3)}</div>
            </div>
        );
    }
}

export default Grid;