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
            <div>
                <div>
                    <Grid board={this.state.board}/>
                </div>
                <div>
                    <KeyListener onChange={(val) => this.setState({board: val})} board={this.state.board}/>
                </div>
            </div>
        );
    }
}

export default App;