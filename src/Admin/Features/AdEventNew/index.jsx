import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import eventNewsApi from "../../../api/eventNewsApi";
import AdHeader from "../../Components/AdHeader";
import SideBar from "../../Components/SideBar";
import EventNewsList from "../AdEventNew/Components/EventNewsList";
import "./style.css";
function AdminEventNews(props) {
   
    const [eventNews, setEventNews] = useState([]);
    useEffect(()=>{
      const getData = async ()=>{
          const dataApi = await eventNewsApi.getAll();
          setEventNews(dataApi);
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
              <Link to="/Admin/tintuc">Tin tức và sự kiện</Link>
            </span>
                <h3>Tin tức và sự kiện</h3>
                <Link to="/Admin/tintuc/them">
                   <button>Thêm tin tức và sự kiện</button>
                </Link>
            </div>
            {/* Form */}
            <EventNewsList eventNews={eventNews}/>
          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AdminEventNews;
