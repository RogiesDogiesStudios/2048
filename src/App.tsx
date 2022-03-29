import React, {Component} from 'react';
import './App.css';

interface AppState{
  kevin: string;
}

document.addEventListener('keydown', (event) => {
  console.log("kevin")
})

class App extends Component<{}, AppState> {
  componentDidMount() {
    addEventListener('keydown', (event) => {
      console.log("kevin")
    })
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