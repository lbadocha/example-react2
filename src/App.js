import logo from './logo.svg';
import './App.css';
import ChangeColor from './ChangeColor';

import Heading from './Heading';

function App() {
  return (
    <div className="App">
      <Heading headingText="Nagłówek 1 z prosów" classValue="red-color" />
      <Heading headingText="Nagłówek 2 z prosów" />
      <Heading headingText="Nagłówek 3 z prosów" />
    </div>
  );
}

export default App;
