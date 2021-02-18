import logo from './logo.svg';
import './App.scss';
import Button from '@material-ui/core/Button';
import GlobalNav from '../GlobalNav';

const App = () => (
  <div className="App">
    <GlobalNav />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Button variant="contained" color="primary">
        Material UI Button
      </Button>
    </header>
  </div>
)

export default App;
