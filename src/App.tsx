import React, {Component} from 'react';
import './App.css';
import Grid from './Grid';
import KeyListener from './KeyListener';

interface AppState {
    board: number[][],
    baseNum: number,
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
        board: [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]],
        baseNum: 2,
    };}

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