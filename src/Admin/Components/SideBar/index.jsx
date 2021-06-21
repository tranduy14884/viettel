import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";
import navbarImg from '../../../asset/img/logo-nabar-admin.png'
function SideBar(props) {
    return (
  
               <ul className="wrapper-sidebar">
                <li><Link to="/Admin"><span><img className="img-navbar" src={navbarImg} alt="#" /> </span></Link></li>
                <li><Link to="/Admin/giadinh"><span><i className="fas fa-fw fa-folder"></i>Gói gia đình</span></Link></li>
                <li><Link to="/Admin/boxTv"><span><i className="fas fa-fw fa-table"></i>Gói BoxTv</span></Link></li>
                <li><Link to="/Admin/doanhnghiep"><span><i className="fas fa-fw fa-table"></i>Gói doanh nghiệp</span></Link></li>
            </ul>
       
    );
}

export default SideBar;