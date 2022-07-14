import "./App.css";
import { Heading } from "./components/Heading";
import { Button } from "./components/Button";
import { useState } from "react";
import { Input } from "./components/Input";
import { DogItem } from "./components/DogItem";
import "./litComponents/simple-btn";
import "./litComponents/simple-dog-item";
import "./litComponents/simple-input";
import "./litComponents/simple-title";
import { VanillaInput } from "./components/VanillaInput";
import { VanillaButon } from "./components/VanillaButton";
import { VanillaDogItem } from "./components/VanillaDogItem";
import { DogPreview } from "./components/DogPreview";
import { VanillaHeading } from "./components/VanillaHeading";
function App() {
  const [inputValuesll, setInputValuesll] = useState({
    dogName: "",
    breed: "",
  });
  const [inputValueslr, setInputValueslr] = useState({
    dogName: "",
    breed: "",
  });

  const [dogs, setDogs] = useState([]);
  const [dogslr, setDogslr] = useState([]);

  const titlePreview = "New dog - Preview";
  const detailsPreview =
    " This section exists purely to demonstrate lit component update on object change";

  const onNameChange = (e) => {
    setInputValuesll({ ...inputValuesll, dogName: e.detail.value });
  };
  const onNameChangelr = (e) => {
    setInputValueslr({ ...inputValueslr, dogName: e.detail.value });
  };

  const onBreedChange = (e) => {
    setInputValuesll({ ...inputValuesll, breed: e.detail.value });
  };

  const onBreedChangelr = (e) => {
    setInputValueslr({ ...inputValueslr, breed: e.detail.value });
  };

  const handleAddDog = () => {
    setDogs([...dogs, { ...inputValuesll }]);
    setInputValuesll({ dogName: "", breed: "" });
  };

  const handleRemoveDog = (target) => {
    setDogs(dogs.filter((dog, i) => i !== target));
  };

  const handleAddDoglr = () => {
    setDogslr([...dogslr, { ...inputValueslr }]);
    setInputValueslr({ dogName: "", breed: "" });
  };

  const handleRemoveDoglr = (target) => {
    setDogslr(dogslr.filter((dog, i) => i !== target));
  };

  return (
    <div className="App">
      <Heading color="orange">
        Demo using{" "}
        <a href="https://www.npmjs.com/package/@lit-labs/react">
          @lit-labs/react
        </a>
      </Heading>
      <div className="input-field">
        <Input
          placeholder="Name"
          onChange={onNameChange}
          value={inputValuesll.dogName}
        ></Input>
      </div>
      <div className="input-field">
        <Input
          placeholder="Breed"
          onChange={onBreedChange}
          value={inputValuesll.breed}
        ></Input>
      </div>
      <Button onClick={handleAddDog}>Add new friend</Button>
      <div className="dog-preview">
        <DogPreview title={titlePreview} details={detailsPreview} />
        <DogItem details={inputValuesll} />
      </div>
      <div className="dogs-list">
        <h2>Added Dogs List</h2>
        <ol>
          {dogs.map((dog, i) => (
            <li className="dog-item" key={i}>
              {<DogItem details={dog} />}{" "}
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
      <VanillaHeading
        color="orange"
        title={
          <p>
            Demo using <a href="https://lit.dev/">lit</a>
          </p>
        }
      />
      <div className="input-field">
        <VanillaInput
          placeholder="Name"
          onChange={onNameChangelr}
          value={inputValueslr.dogName}
        ></VanillaInput>
      </div>
      <div className="input-field">
        <VanillaInput
          onChange={onBreedChangelr}
          value={inputValueslr.breed}
          placeholder="Breed"
        ></VanillaInput>
      </div>
      <VanillaButon onClick={handleAddDoglr} action="Add new friend" />
      <div className="dog-preview">
        <DogPreview title={titlePreview} details={detailsPreview} />
        <VanillaDogItem details={JSON.stringify(inputValueslr)} />
      </div>
      <div className="dogs-list">
        <h2>Added Dogs List lit-react</h2>
        <ol>
          {dogslr.map((dog, i) => (
            <li className="dog-item" key={i}>
              {<VanillaDogItem details={JSON.stringify(dog)} />}
              <VanillaButon
                onClick={() => {
                  handleRemoveDoglr(i);
                }}
                action={`Delete ${dog.dogName} - ${dog.breed}`}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
