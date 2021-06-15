import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Line from "../../../../Components/Line";
import Family from "../Family"
MainContent.propTypes = {};

function MainContent(props) {
  const families = [
   {
     id: 1,
     name : 'Gói NET1PLUS ',
     speed: '30Mbps',
     price : 165000,
     halfYear : 0,
     fullYear : 1
   },
   {
    id: 2,
    name : 'Gói NET2PLUS ',
    speed: '80Mbps',
    price : 180000,
    halfYear : 1,
    fullYear : 3
  },
  {
    id: 3,
    name : 'Gói NET3PLUS ',
    speed: '110Mbps',
    price : 210000,
    halfYear : 1,
    fullYear : 3
  },
  {
    id: 4,
    name : 'Gói NET4PLUS ',
    speed: '140Mbps',
    price : 260000,
    halfYear : 1,
    fullYear : 3
  },
  {
    id: 5,
    name : 'Gói NET5PLUS ',
    speed: '300Mbps',
    price : 430000,
    halfYear : 1,
    fullYear : 3
  },
  ]
  return (
    <div>
      {/* START supporr-section */}
      <div className="container support-section">
        <div class="wordart slate">
          <span class="text">TỔNG ĐÀI HỖ TRỢ VIETTEL CẦN THƠ </span>
        </div>
      </div>
      <button className="btn-support-phone">035.5533.377</button>
      {/*END  supporr-section */}

      {/* START-LINE */}
      <Line />
      {/* END-LINE */}

      {/* START-CONTENT */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 left-content">
            <h2 className="chu-nhap-nhay">CÁP QUANG VIETTEL</h2>
            <h3 className="title">Giá cước theo hộ gia đình</h3>
            <div className="families">
            <Family families={families} />

            </div>
        
          </div>
          <div className="col-md-4 right-content"><h2  className="chu-nhap-nhay">HỖ TRỢ TRỰC TUYẾN</h2></div>
        </div>
      </div>

      {/* END - START-CONTENT */}

    </div>
  );
}

export default MainContent;
