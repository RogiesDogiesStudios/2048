import React, {Component} from 'react';
import './App.css';

interface AppState{
  kevin: string;
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      kevin: ''
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', event => {
      this.setState({
        kevin: event.key
      })
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