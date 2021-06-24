import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import superApi from "../../../api/superApi";
import AdHeader from "../../Components/AdHeader";
import SideBar from "../../Components/SideBar";
import SmartHomeList from "./Components/SmartHomeList";

function AddBoxtv(props) {
  const [smartHomes, setSmartHomes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const dataApi = await superApi.getAll();
      setSmartHomes(dataApi);
    };
    getData();
  }, []);
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
              <Link to="/Admin/thongminh">Gói cước thông minh</Link>
            </span>
            <h3>Gói cước thông minh</h3>
            <Link to="/Admin/thongminh/them">
              <button>Thêm gói cước</button>
            </Link>
          </div>
          {/* Form */}
          <SmartHomeList smartHomeList={smartHomes} />

          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AddBoxtv;
