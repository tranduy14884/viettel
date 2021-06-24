import React, { useEffect, useState } from "react";
import "./style.css";
import SideBar from "../../Components/SideBar";
import AdHeader from "../../Components/AdHeader";
import AdFooter from "../../Components/AdFooter";
import FamilyList from "../AdFamily/Components/FamilyList";
import { Link } from "react-router-dom";
import familyApi from "../../../api/familyApi";
function AdminFamily(props) {
  
  const [families, setFamilies] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
        const dataApi = await familyApi.getAll();
        setFamilies(dataApi);
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
