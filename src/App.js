import logo from './jivalogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
            Welcome to JIVA AUTOMATION - Signals updates          
        </p>
        <a
          className="App-link"
          href="https://www.jivainnovative.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Updating Machine Signals
        </a>
      </header>
    </div>
  );
}

export default App;
