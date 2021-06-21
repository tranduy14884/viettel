import React from "react";
import "./style.css";
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
        <button>Đăng nhập</button>
      </div>
    </>
  );
}

export default AdHeader;
