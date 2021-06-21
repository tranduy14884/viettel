import React from "react";
import "./style.css";
import SideBar from "../../Components/SideBar";
import AdHeader from "../../Components/AdHeader";
import AdFooter from "../../Components/AdFooter";
import BoxtvList from "../AdBoxTv/Components/BoxtvList";
import {Link} from "react-router-dom";
function AdminFamily(props) {
    const boxs = [
        {
          id: 1,
          name: "Gói Combo NET1",
          speed: "30Mbps",
          price: 229000,
          halfYear: 1,
          fullYear: 3,
          modem: 1,
          boxtv: 1,
        },
        {
          id: 2,
          name: "Gói Combo NET2",
          speed: "80Mbps",
          price: 245000,
          halfYear: 1,
          fullYear: 3,
          modem: 1,
          boxtv: 1,
        },
        {
          id: 3,
          name: "Gói Combo NET3",
          speed: "110Mbps",
          price: 265000,
          halfYear: 1,
          fullYear: 3,
          modem: 1,
          boxtv: 1,
        },
        {
          id: 4,
          name: "Gói Combo NET4",
          speed: "140Mbps",
          price: 305000,
          halfYear: 1,
          fullYear: 3,
          modem: 1,
          boxtv: 1,
        },
        {
          id: 5,
          name: "Gói Combo NET5",
          speed: "300Mbps",
          price: 430000,
          halfYear: 1,
          fullYear: 3,
          modem: 1,
          boxtv: 2,
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
              <Link to="/Admin">Trang chủ</Link>
              &nbsp;
              <i class="fas fa-arrow-right"></i>
              &nbsp;
              <Link to="/Admin/boxTv">Gói cước cáp quang + boxTV</Link>
            </span>
                <h3>Gói cước cáp quang + boxTv</h3>
                <Link to="/Admin/boxTv/them">
                   <button>Thêm gói cước</button>
                </Link>
            </div>
            {/* Form */}
            <BoxtvList Boxs={boxs}/>
          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AdminFamily;
