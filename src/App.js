import logo from './logo.svg';
import './App.css';
import { Heading } from './components/Heading';
import { Button } from './components/Button';
import { useRef, useState } from 'react';
import { Input } from './components/Input';

function App() {
  const [inputValues, setInputValues] = useState({dogName: '', breed: ''});
  const [dogs, setDogs] = useState([]);

  const onNameChange = (e) => {
    setInputValues({...inputValues, dogName: e.details.value});
  }

  const onBreedChange = (e) => {
    setInputValues({...inputValues, breed: e.details.value});
  } 

  const handleAddDog = () => {
    setDogs([...dogs, {}]);
  }

  const handleRemoveDog = (target) => {
    setDogs([...dogs.filter((dog, i) => i !== target)]);
  };

  return (
    <div className="App">
      <Heading color="orange">Demo using <a href="https://www.npmjs.com/package/@lit-labs/react">@lit-labs/react</a></Heading>
      <Input placeholder='Name' onChange={onNameChange} value={setInputValues.dogName}></Input>
      <Input placeholder='Breed' onChange={onBreedChange} value={setInputValues.breed}></Input>
      <Button onClick={handleAddDog}>Add Dog</Button>
      <div>
        <ol>
          {dogs.map((dog, i) => <li key={i}>{dog} <Button onClick={() => {
            handleRemoveDog(i);
          }}>Delete Dog</Button></li>)}
        </ol>
      </div>
    </div>
  );
}

export default App;
