import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Features/Home';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
