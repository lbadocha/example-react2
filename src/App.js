import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import ChangeColor from './ChangeColor';

import Heading from './Heading';
import Buttons from './Buttons';


class App extends Component {


  constructor() {
    super();

    this.state = {
      headingText: 'xyz'
    }
  }


  updateText = textParam => {
    this.setState({headingText: textParam})
  }

  render(){ 
    return (
      <div className="App">
        <Heading headingText={this.state.headingText} classValue="red-color" />
        <Buttons updateMethod={this.updateText} />
        <Heading headingText="Nagłówek 2 z prosów" />
        <Heading headingText="Nagłówek 3 z prosów" />
      </div>
    );
  }

  
}

export default App;
