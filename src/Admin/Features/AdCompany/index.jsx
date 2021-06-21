import React from "react";
import { Link } from "react-router-dom";
import AdHeader from "../../Components/AdHeader";
import SideBar from "../../Components/SideBar";
import CompanyList from "../AdCompany/Components/CompanyList";
import "./style.css";
AdCompany.propTypes = {};
const companies = [
  {
    id: 1,
    name: "Gói F90 N",
    speed: "90Mb / 2Mb",
    Ip: 0,
    price: 440000,
    halfYear: 1,
    fullYear: 3,
    raderFullYear: 4,
  },
  {
    id: 2,
    name: "Gói F90 Basic",
    speed: "90Mb / 1Mb",
    price: 660000,
    Ip: 1,
    halfYear: 1,
    fullYear: 3,
    raderFullYear: 4,
  },
  {
    id: 3,
    name: "Gói F90 Plus",
    speed: "90Mb / 3Mb",
    price: 880000,
    Ip: 1,
    halfYear: 1,
    fullYear: 3,
    raderFullYear: 4,
  },
  {
    id: 4,
    name: "Gói F200 N",
    speed: "200Mb / 2Mb",
    price: 1100000,
    Ip: 1,
    halfYear: 1,
    fullYear: 3,
    raderFullYear: 4,
  },
  {
    id: 5,
    name: "Gói F200 Basic",
    speed: "200Mb / 4Mb",
    price: 2200000,
    Ip: 1,
    halfYear: 1,
    fullYear: 3,
    raderFullYear: 4,
  },
  {
    id: 6,
    name: "Gói F200 Plus",
    speed: "200Mb / 6Mb",
    price: 4400000,
    Ip: 1,
    halfYear: 1,
    fullYear: 3,
    raderFullYear: 4,
  },
];
function AdCompany(props) {
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
              <Link to="/Admin/doanhnghiep">Gói cước doanh nghiệp</Link>
          
            </span>
            <h3>Gói cước doanh nghiệp</h3>
            <Link to="/Admin/doanhnghiep/them">
              <button>Thêm gói cước</button>
            </Link>
          </div>
          {/* Form */}
          <CompanyList companies={companies} />
          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AdCompany;
