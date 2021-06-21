import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
function AdHeader(props) {
  return (
    <>
      <div className="header-img">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Viettel_logo_2021.svg/1024px-Viettel_logo_2021.svg.png"
          alt="#"
        />
        
      </div>
      <div className="header-login">
        <Link to="/admin/dangnhap" >
          <button>Đăng nhập</button>
        </Link>
      </div>
    </>
  );
}

export default AdHeader;
