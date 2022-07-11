import logo from './logo.svg';
import './App.css';
import { Heading } from './components/Heading/Heading';
import { useEffect, useState } from 'react';
import { Input } from './components/Heading/Input';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [dogs, setDogs] = useState([]);

  const onInputChange = (e) => {
    setInputValue(e.detail.value);
  }

  return (
    <div className="App">
      <Heading color="orange">Demo using <a href="https://www.npmjs.com/package/@lit-labs/react">@lit-labs/react</a></Heading>
      <Input placeholder='Test' onChange={onInputChange} value={inputValue}></Input>
    </div>
  );
}

export default App;
