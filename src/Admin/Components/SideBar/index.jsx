import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";
import navbarImg from '../../../asset/img/logo-nabar-admin.png'
function SideBar(props) {
    return (
  
               <ul className="wrapper-sidebar">
                <li><Link to="/Admin"><span><img className="img-navbar" src="https://www.viettelhochiminh.vn/vnt_upload/File/11_2020/logofoter.png" alt="#" /> </span></Link></li>
                <li><Link to="/Admin/giadinh"><span><i class="fas fa-user"></i>Gói gia đình</span></Link></li>
                <li><Link to="/Admin/boxTv"><span><i class="fas fa-tv"></i>Gói BoxTv</span></Link></li>
                <li><Link to="/Admin/doanhnghiep"><span><i class="far fa-building"></i>Gói doanh nghiệp</span></Link></li>
                <li><Link to="/Admin/thongminh"><span><i class="fas fa-sun"></i>Gói thông minh</span></Link></li>
                <li><Link to="/Admin/donhang"><span><i class="fas fa-shopping-cart"></i>Đơn hàng</span></Link></li>
                <li><Link to="/Admin/dichvu"><span><i class="fab fa-servicestack"></i>Dịch vụ</span></Link></li>
                <li><Link to="/Admin/tintuc"><span><i class="fas fa-calendar-check"></i>Tin tức</span></Link></li>
            </ul>
       
    );
}

export default SideBar;