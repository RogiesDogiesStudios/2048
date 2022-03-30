import React, {Component} from 'react';
import './App.css';
import Grid from './Grid';
import KeyListener from './KeyListener';

interface AppState {
    board: number[][]
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
        board: [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]],
    };
    }

  render() {
    return (
        <div title="Grid">
            <Grid board={this.state.board}/>
            <KeyListener board={this.state.board} onChange={(value) => {this.setState({board: value})}}/>
        </div>
    );
  }
}

export default App;