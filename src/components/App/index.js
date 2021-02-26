import logo from './logo.svg';
import './App.scss';
import GlobalNav from '../GlobalNav';
import LandingPage from '../LandingPage';

const App = () => (
  <div className="App">
    <GlobalNav />
    <LandingPage />
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
