import React from "react";
import PropTypes from "prop-types";
import SideBar from "../../../../Components/SideBar";
import AdHeader from "../../../../Components/AdHeader";
import AdFooter from "../../../../Components/AdFooter";
import { Link } from "react-router-dom";
import FormAdd from "../FormAdd";

function AddFamily(props) {
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
              <Link to="/Admin/giadinh">Gói cước gia đình</Link>
              &nbsp;
              <i class="fas fa-arrow-right"></i>
              &nbsp;
              <Link to="/Admin/giadinh/them">Thêm gói cước</Link>
            </span>
            <h3>Gói cước gia đình</h3>
          </div>
          {/* Form */}
          <FormAdd />

          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AddFamily;
