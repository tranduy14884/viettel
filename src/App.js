import { Route, Switch } from 'react-router-dom';
import Admin from './Admin';
import AdminFamily from './Admin/Features/AdFamily';
import './App.css';
import Home from './Features/Home';
import AdminBoxTv from './Admin/Features/AdBoxTv'
import AdCompany from './Admin/Features/AdCompany';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact></Route>


        {/* Admin */}
        <Route path="/Admin" component={Admin} exact />
        <Route path="/admin/giadinh" component={AdminFamily} exact />
        <Route path="/admin/boxTv" component={AdminBoxTv} exact />
        <Route path="/admin/doanhnghiep" component={AdCompany} exact />
      </Switch>
    </div>
  );
}

export default App;
