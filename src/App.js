import logo from './logo.svg';
import './App.css';
import { Heading } from './components/Heading';
import { Button } from './components/Button';
import { useRef, useState } from 'react';
import { Input } from './components/Input';
import { DogItem } from './components/DogItem';

function App() {
  const [inputValues, setInputValues] = useState({ dogName: '', breed: '' });
  const [dogs, setDogs] = useState([]);

  const onNameChange = (e) => {
    setInputValues({ ...inputValues, dogName: e.detail.value });
  }

  const onBreedChange = (e) => {
    setInputValues({ ...inputValues, breed: e.detail.value });
  }

  const handleAddDog = () => {
    setDogs([...dogs, { ...inputValues }]);
    setInputValues({ dogName: '', breed: '' });
  }

  const handleRemoveDog = (target) => {
    setDogs(dogs.filter((dog, i) => i !== target));
  };

  return (
    <div className="App">
      <Heading color="orange">Demo using <a href="https://www.npmjs.com/package/@lit-labs/react">@lit-labs/react</a></Heading>
      <div className='input-field'>
        <Input placeholder='Name' onChange={onNameChange} value={inputValues.dogName}></Input>
      </div>
      <div className='input-field'>
        <Input placeholder='Breed' onChange={onBreedChange} value={inputValues.breed}></Input>
      </div>
      <Button onClick={handleAddDog}>Add new friend</Button>
      <div className='dog-preview'>
        <h2>New dog - Preview</h2>
        <p>This section exists purely to demonstrate lit component update on object change</p>
        <DogItem details={inputValues} />
      </div>
      <div className='dogs-list'>
        <h2>Added Dogs List</h2>
        <ol>
          {dogs.map((dog, i) => <li className='dog-item' key={i}>{<DogItem details={dog} />} <Button onClick={() => {
            handleRemoveDog(i);
          }}>Delete {dog.dogName} - {dog.breed}</Button></li>)}
        </ol>
      </div>
    </div>
  );
}

export default App;
