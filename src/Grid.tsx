import React, {Component} from 'react';
import './App.css';

const colors = ['#FFABFA', '#FFDAAB', '#D0FFAB', '#FAFFAB', '#FFABD0', '#ABFCFF', '#AEABFF', '#ABD2FF', '#E4FFAB', '#E6788A', '#D478E6', '#D478E6'];

interface GridProps {
    board: number[][]
    baseNum: number;
}

class Grid extends Component<GridProps, {}> {
    constructor(props: any) {
        super(props);
    }

    getElement() {
        if(this.props.board.length === 0) return;
        let elementArr : JSX.Element[] = [];
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                if(this.props.board[i][j] === 0) {
                    elementArr.push(<div className={'grid-item'} style={{backgroundColor: 'white'}}/>);
                } else {
                    elementArr.push(<div className={'grid-item'} style={{backgroundColor: this.pickGridColor(this.props.board[i][j])}}>{this.props.board[i][j]}</div>);
                }
            }
        }
        return elementArr;
    }

    // returns a color based on value
    pickGridColor(value: number) {
        //Does some epic math that Tommy wrote to generate a color
        value = Math.log2((value / this.props.baseNum));
        if(value >= colors.length) return colors[colors.length-1]
        return colors[value];
    }

    render() {
        return (
            <div className={'grid-container'}>
                {this.getElement()}
            </div>
        );
    }
}

export default Grid;