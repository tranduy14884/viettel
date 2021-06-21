import React from "react";
import "./style.css";
import SideBar from "../../Components/SideBar";
import AdHeader from "../../Components/AdHeader";
import AdFooter from "../../Components/AdFooter";
import FamilyList from "../AdFamily/Components/FamilyList";
import { Link } from "react-router-dom";
function AdminFamily(props) {
  const families = [
    {
      id: 1,
      name: "Gói NET1PLUS ",
      speed: "30Mbps",
      price: 165000,
      halfYear: 0,
      fullYear: 1,
    },
    {
      id: 2,
      name: "Gói NET2PLUS ",
      speed: "80Mbps",
      price: 180000,
      halfYear: 1,
      fullYear: 3,
    },
    {
      id: 3,
      name: "Gói NET3PLUS ",
      speed: "110Mbps",
      price: 210000,
      halfYear: 1,
      fullYear: 3,
    },
    {
      id: 4,
      name: "Gói NET4PLUS ",
      speed: "140Mbps",
      price: 260000,
      halfYear: 1,
      fullYear: 3,
    },
    {
      id: 5,
      name: "Gói NET5PLUS ",
      speed: "300Mbps",
      price: 430000,
      halfYear: 1,
      fullYear: 3,
    },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10">
          <div className="row">
            <AdHeader />
          </div>
          {/*Content Row */}
            <div className="packet-name-admin">
                <span className="redirect-page">
                  <Link to="/Admin">
                    Trang chủ
                  </Link>
                  &nbsp;
                  <i class="fas fa-arrow-right"></i>
                  &nbsp;
                  <Link to="/Admin/giadinh">
                    Gói cước gia đình
                  </Link>
                </span>
                <h3>Gói cước gia đình</h3>
                <Link to="/Admin/giadinh/them">
                   <button>Thêm gói cước</button>
                </Link>
            </div>
            {/* Form */}
            <FamilyList  familyList={families}/>


          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AdminFamily;
