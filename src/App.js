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
import FixBoxtv from './Admin/Features/AdBoxTv/Components/FixBoxtv';
import FixSmartHome from './Admin/Features/AdSmartHome/Components/FixSmartHome';
import AdPage from './Admin/Features/AdPage';
import NotFound from './Features/Home/Components/NotFound';
import AdminService from './Admin/Features/AdService';
import AddService from './Admin/Features/AdService/Components/AddService';
import FixService from './Admin/Features/AdService/Components/FixService';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact></Route>


        {/* Admin */}
        <Route path="/Admin" component={Admin} exact />
        <Route path="/Admin/adminpage" component={AdPage} exact />
        <Route path="/Admin/dangnhap" component={Auth} exact />
        <Route path="/admin/giadinh" component={AdminFamily} exact />
        <Route path="/admin/giadinh/them" component={AddFamily} exact />
        <Route path="/admin/giadinh/sua/:idFamily" component={FixFamily} exact />
        <Route path="/admin/boxTv" component={AdminBoxTv} exact />
        <Route path="/Admin/boxTv/them" component={AddBoxtv} exact />
        <Route path="/Admin/boxTv/sua/:idBoxtv" component={FixBoxtv} exact />
        <Route path="/admin/doanhnghiep" component={AdCompany} exact />
        <Route path="/Admin/doanhnghiep/them" component={AddCompany} exact />
        <Route path="/Admin/doanhnghiep/sua/:idCompany" component={FixCompany} exact />
        <Route path="/Admin/donhang" component={AdOrder} exact />
        <Route path="/Admin/thongminh" component={AdSmartHome} exact />
        <Route path="/Admin/thongminh/them" component={AddSmartHome} exact />
        <Route path="/Admin/thongminh/sua/:idSmartHome" component={FixSmartHome} exact />
        <Route path="/Admin/dichvu" component={AdminService} exact />
        <Route path="/Admin/dichvu/them" component={AddService} exact />
        <Route path="/Admin/dichvu/sua/:idService" component={FixService} exact />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
