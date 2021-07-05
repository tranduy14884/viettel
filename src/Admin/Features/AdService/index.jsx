import React, { useEffect, useState } from "react";
import "./style.css";
import SideBar from "../../Components/SideBar";
import AdHeader from "../../Components/AdHeader";
import AdFooter from "../../Components/AdFooter";
import ServiceList from "../AdService/Components/ServiceList";
import {Link} from "react-router-dom";
import serviceApi from "../../../api/serviceApi";
function AdminService(props) {
   
    const [services, setServices] = useState([]);
    useEffect(()=>{
      const getData = async ()=>{
          const dataApi = await serviceApi.getAll();
          setServices(dataApi);
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
              <Link to="/Admin/dichvu">Dịch vụ</Link>
            </span>
                <h3>Dịch vụ</h3>
                <Link to="/Admin/dichvu/them">
                   <button>Thêm dịch vụ</button>
                </Link>
            </div>
            {/* Form */}
            <ServiceList services={services}/>
          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AdminService;
