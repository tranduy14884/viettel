import React from "react";
import { Link } from "react-router-dom";
import AdHeader from "../../../../Components/AdHeader";
import SideBar from "../../../../Components/SideBar";
import FormAdd from "../FormAdd";

function AddEventNews(props) {
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
              <Link to="/Admin/tintuc">Tin tức và sự kiện</Link>
              &nbsp;
              <i class="fas fa-arrow-right"></i>
              &nbsp;
              <Link to="/Admin/tintuc/them">Thêm tin tức và sự kiện</Link>
            </span>
            <h3>Tin tức và sự kiện</h3>
          </div>
          {/* Form */}
          <FormAdd />

          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AddEventNews;
