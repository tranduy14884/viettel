import React from "react";
import { Link } from "react-router-dom";
import AdHeader from "../../../../Components/AdHeader";
import SideBar from "../../../../Components/SideBar";
import FormAdd from "../FormAdd";

function AddService(props) {
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
              <Link to="/Admin/dichvu">Dịch vụ</Link>
              &nbsp;
              <i class="fas fa-arrow-right"></i>
              &nbsp;
              <Link to="/Admin/dichvu/them">Thêm dịch vụ</Link>
            </span>
            <h3>Dịch vụ</h3>
          </div>
          {/* Form */}
          <FormAdd />

          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AddService;
