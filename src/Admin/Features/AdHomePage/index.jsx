import React, { useEffect } from "react";
import "./style.css";
import AdFooter from "../../Components/AdFooter";
import AdHeader from "../../Components/AdHeader";
import SideBar from "../../Components/SideBar";
import { useState } from "react";
import orderApi from "../../../api/orderApi";
function AdHomePage(props) {
  //handle digital
  const [orderList, setOrderList] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
        const dataApi = await orderApi.getAll();
        setOrderList(dataApi);
    }
    getData()
  },[]);
  let countStatus1 = 0;
  let countStatus0 = 0;
  // const [orderHandled,setOrderHandled] = useState(0);
  // const [orderNoHandl,setOrderNoHandl] = useState(0);
  orderList.map(item=>{
    if(item.status ==1)
    {
      countStatus1++;
    }
    else countStatus0++;
  });
  
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
          <div className="row">
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Tổng số hóa đơn
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                       {orderList.length}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Số hóa đơn đã xử lý
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                       {countStatus1}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Số hóa đơn chưa xử lý
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {countStatus0}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pending Requests Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Pending Requests
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        18
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AdHomePage;
