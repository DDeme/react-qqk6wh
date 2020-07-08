import React, { Component } from 'react';
import { render } from 'react-dom';
import {NumberInput} from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      value: 5,
    };
  }


  inputChange = (e) => {
    const newState = Object.assign({}, this.state)
    newState.value = e.target.value
    
    this.setState(newState)
    alert(e.target.value)
  }
  
  render() {
    return (
      <div>
        <NumberInput value={this.state.value} onChange={this.inputChange}/>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
