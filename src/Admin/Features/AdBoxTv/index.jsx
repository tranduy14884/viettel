import React, { useEffect, useState } from "react";
import "./style.css";
import SideBar from "../../Components/SideBar";
import AdHeader from "../../Components/AdHeader";
import AdFooter from "../../Components/AdFooter";
import BoxtvList from "../AdBoxTv/Components/BoxtvList";
import {Link} from "react-router-dom";
import comboApi from "../../../api/comboApi";
function AdminBoxtv(props) {
   
    const [boxs, setBoxs] = useState([]);
    useEffect(()=>{
      const getData = async ()=>{
          const dataApi = await comboApi.getAll();
          setBoxs(dataApi);
      }
      getData()
    },[]);
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

export default AdminBoxtv;
