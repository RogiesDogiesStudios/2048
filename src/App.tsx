import React, {Component} from 'react';
import './App.css';

interface AppState{
  kevin: string;
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
          {this.state.kevin}
        </div>
    );
  }
}

export default App;