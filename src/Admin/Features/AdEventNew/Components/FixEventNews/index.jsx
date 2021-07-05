import React from "react";
import PropTypes from "prop-types";
import SideBar from "../../../../Components/SideBar";
import AdHeader from "../../../../Components/AdHeader";
import AdFooter from "../../../../Components/AdFooter";
import { Link } from "react-router-dom";
import FormFix from "../FormFix";
import "./style.css";
function FixEventNews(props) {
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
              <Link to="/Admin/tintuc/sua">Sửa tin tức và sự kiện</Link>
            </span>
            <h3>Tin tức và sự kiện</h3>
          </div>
          {/* Form */}
          <FormFix />

          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default FixEventNews;
