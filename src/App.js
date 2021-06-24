import { Route, Switch } from 'react-router-dom';
import Admin from './Admin';
import Auth from "./Admin/Auth";
import AdminBoxTv from './Admin/Features/AdBoxTv';
import AddBoxtv from './Admin/Features/AdBoxTv/Components/AddBoxtv';
import AdCompany from './Admin/Features/AdCompany';
import AddCompany from './Admin/Features/AdCompany/Components/AddCompany';
import AdminFamily from './Admin/Features/AdFamily';
import AddFamily from './Admin/Features/AdFamily/Components/AddFamily';
import AdOrder from './Admin/Features/AdOrder';
import AdSmartHome from './Admin/Features/AdSmartHome';
import AddSmartHome from './Admin/Features/AdSmartHome/Components/AddSmartHome';
import './App.css';
import Home from './Features/Home';
import FixFamily from './Admin/Features/AdFamily/Components/FixFamily';
import FixCompany from './Admin/Features/AdCompany/Components/FixCompany';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact></Route>


        {/* Admin */}
        <Route path="/Admin" component={Admin} exact />
        <Route path="/Admin/dangnhap" component={Auth} exact />
        <Route path="/admin/giadinh" component={AdminFamily} exact />
        <Route path="/admin/giadinh/them" component={AddFamily} exact />
        <Route path="/admin/giadinh/sua/:idFamily" component={FixFamily} exact />
        <Route path="/admin/boxTv" component={AdminBoxTv} exact />
        <Route path="/Admin/boxTv/them" component={AddBoxtv} exact />
        <Route path="/admin/doanhnghiep" component={AdCompany} exact />
        <Route path="/Admin/doanhnghiep/them" component={AddCompany} exact />
        <Route path="/Admin/doanhnghiep/sua/:idCompany" component={FixCompany} exact />
        <Route path="/Admin/donhang" component={AdOrder} exact />
        <Route path="/Admin/thongminh" component={AdSmartHome} exact />
        <Route path="/Admin/thongminh/them" component={AddSmartHome} exact />
      </Switch>
    </div>
  );
}

export default App;
