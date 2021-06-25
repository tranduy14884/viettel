import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import orderApi from "../../../api/orderApi";
import AdHeader from "../../Components/AdHeader"
import SideBar from "../../Components/SideBar";
import OrderList from "./Components/OrderList";
import "./style.css";

function AddBoxtv(props) {

  const [orderList, setOrderList] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
        const dataApi = await orderApi.getAll();
        setOrderList(dataApi);
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
              <Link to="/Admin/donhang">Đơn hàng</Link>
              
            </span>
            <h3>Đơn hàng</h3>
          </div>
          {/* Form */}
          <OrderList orderList={orderList} />

          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AddBoxtv;
