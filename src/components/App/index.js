import logo from './logo.svg';
import './App.scss';
import GlobalNav from '../GlobalNav';
import LandingPage from '../LandingPage';

const App = () => (
  <div className="App fixedNav">
    <GlobalNav />
    <LandingPage />
  </div>
)

export default App;
