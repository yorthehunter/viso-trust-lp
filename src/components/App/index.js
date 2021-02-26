import logo from './logo.svg';
import './App.scss';
import GlobalNav from '../GlobalNav';

const App = () => (
  <div className="App">
    <GlobalNav />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button>
        Button
      </button>
    </header>
  </div>
)

export default App;
