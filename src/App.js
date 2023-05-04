import logo from './logo.svg';
import './App.css';
import CodeSplitExample from "./components/CodeSplitExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CodeSplitExample />
      </header>
    </div>
  );
}

export default App;
