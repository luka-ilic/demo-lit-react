import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Heading, Button, Input, DogItem } from './components/index';
import {
  VanillaButton,
  VanillaDogItem,
  VanillaHeader,
  VanillaInput,
} from './vanillaComponents/index';
import './App.css';

function App() {
  const [inputValues, setInputValues] = useState({ dogName: '', breed: '' });
  const [vanillaInputValues, setVanillaInputValues] = useState({
    dogName: '',
    breed: '',
  });
  const [dogs, setDogs] = useState([]);
  const [vanillaDogs, setVanillaDogs] = useState([]);

  const nameInputRef = useRef();
  const breedInputRef = useRef();

  const onNameChange = (e) => {
    setInputValues({ ...inputValues, dogName: e.detail.value });
  };

  const onVanillaNameChange = (e) => {
    setVanillaInputValues({ ...vanillaInputValues, dogName: e.detail.value });
  };

  const onVanillaBreedChange = (e) => {
    setVanillaInputValues({ ...vanillaInputValues, breed: e.detail.value });
  };

  const onBreedChange = (e) => {
    setInputValues({ ...inputValues, breed: e.detail.value });
  };

  const handleAddDog = () => {
    setDogs([...dogs, { ...inputValues }]);
    setInputValues({ dogName: '', breed: '' });
  };

  const handleVanillaAdd = () => {
    setVanillaDogs([...vanillaDogs, { ...vanillaInputValues }]);
    setVanillaInputValues({ dogName: '', breed: '' });
  };

  const handleRemoveDog = (target) => {
    setDogs(dogs.filter((dog, i) => i !== target));
  };

  const vanillaHandleRemoveDog = (target) => {
    setVanillaDogs(vanillaDogs.filter((dog, i) => i !== target));
  };

  useEffect(() => {
    let breedInput = null;
    if (breedInputRef.current) {
      breedInputRef.current.addEventListener(
        'input-change',
        onVanillaBreedChange
      );
      breedInput = breedInputRef.current;
    }
    return () => {
      if (breedInput) {
        breedInput.removeEventListener('input-change', onVanillaBreedChange);
      }
    };
  });

  useEffect(() => {
    let nameInput = null;
    if (nameInputRef.current) {
      nameInputRef.current.addEventListener(
        'input-change',
        onVanillaNameChange
      );
      nameInput = nameInputRef.current;
    }
    return () => {
      if (nameInput) {
        nameInput.removeEventListener('input-change', onVanillaNameChange);
      }
    };
  });

  console.log(vanillaInputValues);

  return (
    <div className='App'>
      <Heading color='orange'>
        Demo using{' '}
        <a href='https://www.npmjs.com/package/@lit-labs/react'>
          @lit-labs/react
        </a>
      </Heading>
      <div className='input-field'>
        <Input
          placeholder='Name'
          onChange={onNameChange}
          value={inputValues.dogName}
        ></Input>
      </div>
      <div className='input-field'>
        <Input
          placeholder='Breed'
          onChange={onBreedChange}
          value={inputValues.breed}
        ></Input>
      </div>
      <Button onClick={handleAddDog}>Add new friend</Button>
      <div className='dog-preview'>
        <h2>New dog - Preview</h2>
        <p>
          This section exists purely to demonstrate lit component update on
          object change
        </p>
        <DogItem details={inputValues} />
      </div>
      <div className='dogs-list'>
        <h2>Added Dogs List</h2>
        <ol>
          {dogs.map((dog, i) => (
            <li className='dog-item' key={i}>
              {<DogItem details={dog} />}{' '}
              <Button
                onClick={() => {
                  handleRemoveDog(i);
                }}
              >
                Delete {dog.dogName} - {dog.breed}
              </Button>
            </li>
          ))}
        </ol>
      </div>
      {/* ----------------------------------------- VANILLA STYLE -------------------------------------------------- */}
      <div>
        <VanillaHeader
          color='orange'
          style={{ marginTop: '50px' }}
          text={
            <>
              Demo using <a href='https://www.npmjs.com/package/lit'>LIT</a>{' '}
            </>
          }
        ></VanillaHeader>
        <div className='input-field'>
          <VanillaInput
            input={onVanillaNameChange}
            value={vanillaInputValues.dogName}
            placeholder='Name'
            innerRef={nameInputRef}
          ></VanillaInput>
        </div>
        <div className='input-field'>
          <VanillaInput
            input={onVanillaBreedChange}
            value={vanillaInputValues.breed}
            placeholder='Breed'
            innerRef={breedInputRef}
          ></VanillaInput>
        </div>
        <VanillaButton
          handleClick={handleVanillaAdd}
          placeHolder='Add'
        ></VanillaButton>
      </div>
      <div className='dog-preview'>
        <h2>New dog - Preview, VANILLA WAY</h2>
        <p>
          This section exists purely to demonstrate lit component update on
          object change without additional libraries
        </p>
        <VanillaDogItem details={JSON.stringify(vanillaInputValues)} />
      </div>
      <div className='dogs-list'>
        <h2>Added Dogs List</h2>
        <ol>
          {vanillaDogs.map((dog, i) => (
            <li className='dog-item' key={i}>
              {<simple-dog-item details={JSON.stringify(dog)} />}{' '}
              <VanillaButton
                handleClick={() => {
                  vanillaHandleRemoveDog(i);
                }}
                placeHolder={`Delete ${dog.dogName} - ${dog.breed}`}
              ></VanillaButton>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
