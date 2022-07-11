import logo from './logo.svg';
import './App.css';
import { Heading } from './components/Heading/Heading';

function App() {
  return (
    <div className="App">
        <Heading color="orange">Demo using <a href="https://www.npmjs.com/package/@lit-labs/react">@lit-labs/react</a></Heading>
    </div>
  );
}

export default App;
