import './App.css';
import Screen from './components/Screen.jsx';
import Button from './components/Button.jsx';
import ClearBtn from './components/ClearBtn';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
        setInput(evaluate(input));
    } else {
        alert("Por favor ingrese valores");
    } 
  };

  return (
    <div className='App'>
      <div className="calculator">
        <Screen input={input}/>
        <div className="row">
            <Button handleClick={addInput}>1</Button>
            <Button handleClick={addInput}>2</Button>
            <Button handleClick={addInput}>3</Button>
            <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
            <Button handleClick={addInput}>4</Button>
            <Button handleClick={addInput}>5</Button>
            <Button handleClick={addInput}>6</Button>
            <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
            <Button handleClick={addInput}>7</Button>
            <Button handleClick={addInput}>8</Button>
            <Button handleClick={addInput}>9</Button>
            <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
            <Button handleClick={calculateResult}>=</Button>
            <Button handleClick={addInput}>0</Button>
            <Button handleClick={addInput}>.</Button>
            <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
            <ClearBtn handleClear={() => setInput('')}>Clear</ClearBtn>
        </div>
      </div>
    </div>
  );
}

export default App;
