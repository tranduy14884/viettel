import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Line from "../../../../Components/Line";
import Family from "../Family";
import BoxTV from "../BoxTV";
import Company from "../Company";
import sheduleImg from "../../../../asset/img/schedule.png";
import Branch from "../Branch";
MainContent.propTypes = {};

function MainContent(props) {
  const families = [
    {
      id: 1,
      name: "Gói NET1PLUS ",
      speed: "30Mbps",
      price: 165000,
      halfYear: 0,
      fullYear: 1,
    },
    {
      id: 2,
      name: "Gói NET2PLUS ",
      speed: "80Mbps",
      price: 180000,
      halfYear: 1,
      fullYear: 3,
    },
    {
      id: 3,
      name: "Gói NET3PLUS ",
      speed: "110Mbps",
      price: 210000,
      halfYear: 1,
      fullYear: 3,
    },
    {
      id: 4,
      name: "Gói NET4PLUS ",
      speed: "140Mbps",
      price: 260000,
      halfYear: 1,
      fullYear: 3,
    },
    {
      id: 5,
      name: "Gói NET5PLUS ",
      speed: "300Mbps",
      price: 430000,
      halfYear: 1,
      fullYear: 3,
    },
  ];
  const boxs = [
    {
      id: 1,
      name: "Gói Combo NET1",
      speed: "30Mbps",
      price: 229000,
      halfYear: 1,
      fullYear: 3,
      modem: 1,
      boxtv: 1,
    },
    {
      id: 2,
      name: "Gói Combo NET2",
      speed: "80Mbps",
      price: 245000,
      halfYear: 1,
      fullYear: 3,
      modem: 1,
      boxtv: 1,
    },
    {
      id: 3,
      name: "Gói Combo NET3",
      speed: "110Mbps",
      price: 265000,
      halfYear: 1,
      fullYear: 3,
      modem: 1,
      boxtv: 1,
    },
    {
      id: 4,
      name: "Gói Combo NET4",
      speed: "140Mbps",
      price: 305000,
      halfYear: 1,
      fullYear: 3,
      modem: 1,
      boxtv: 1,
    },
    {
      id: 5,
      name: "Gói Combo NET5",
      speed: "300Mbps",
      price: 430000,
      halfYear: 1,
      fullYear: 3,
      modem: 1,
      boxtv: 2,
    },
  ];
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
  const listBranch = [
    {
      id : 1,
      name: 'Trung tâm Viettel Quận Ninh Kiều',
      location : '210 Trần Phú, Q.Ninh Kiều, Tp. Cần Thơ',
      web : 'viettelcantho.vn',
      phone : '098621621',
      thumnailUrl : 'http://viettelcantho.vn/uploads/internet-cap-quang/2018_08/cap-quang-viettel-quan-ninh-kieu-can-tho.jpg'
    },
    {
      id : 2,
      name: 'Trung tâm Viettel Quận Bình Thủy',
      location : '23 Đường Cách Mạng Tháng 8, P, Bình Thủy, Cần Thơ 900000',
      web : 'viettelcantho.vn',
      phone : '0292 6251 054',
      thumnailUrl : 'http://viettelcantho.vn/uploads/internet-cap-quang/2018_08/cap-quang-viettel-binh-thuy-can-tho.jpg'
    },
    {
      id : 3,
      name: 'Trung tâm Viettel Quận Ô Môn',
      location : 'Tòa Nhà Viettel, Ô Môn, Cần Thơ 904001',
      web : 'viettelcantho.vn',
      phone : '0292 6251 054',
      thumnailUrl : 'http://viettelcantho.vn/uploads/internet-cap-quang/2018_08/cap-quang-viettel-quan-o-mon-can-tho.jpg'
    },
    {
      id : 4,
      name: 'Trung tâm Viettel Quận Cái Răng',
      location : 'Tòa Nhà Viettel, Ô Môn, Cần Thơ 904001',
      web : 'viettelcantho.vn',
      phone : '0292 6251 054',
      thumnailUrl : 'http://viettelcantho.vn/uploads/internet-cap-quang/2018_08/cap-quang-viettel-cai-rang-can-tho.jpg'
    },
  ]
  return (
    <>
      <div>
        {/* START supporr-section */}
        <div className="container support-section">
          <div class="wordart slate">
            <span class="text">TỔNG ĐÀI HỖ TRỢ VIETTEL CẦN THƠ </span>
          </div>
        </div>
        <button className="btn-support-phone">035.5533.377</button>
        {/*END  supporr-section */}

        {/* START-CONTENT */}
        <div className="brown">
        <div className="container">
          <div className="row">
            <div className="col-md-9 left-content">
              <h2 className="chu-nhap-nhay">CÁP QUANG VIETTEL</h2>
              <h3 className="title">Giá cước theo hộ gia đình</h3>
              <div className="families">
                <Family families={families} />
              </div>
              {/* START-LINE */}
              <Line />
              {/* END-LINE */}
              <h3 className="title">Combo Cáp Quang + BoxTV Viettel</h3>
              <div className="boxtv">
                <BoxTV boxs={boxs} />
              </div>
              {/* START-LINE */}
              <Line />
              {/* END-LINE */}
              <h3 className="title">Giá cước dành cho công ty</h3>
              <div className="boxtv">
                <Company companies={companies} />
              </div>
            </div>
            <div className="col-md-3 right-content">
              <h2 className="chu-nhap-nhay">HỖ TRỢ TRỰC TUYẾN</h2>
            </div>
          </div>
        </div>
        </div>
        
        {/* END - START-CONTENT */}

        {/* START-schedule */}
        <div className="container container-shedule">
          <h3>QUY TRÌNH TRIỂN KHAI LẮP ĐẶT CÁP QUANG VIETTEL CẦN THƠ</h3>
          <img src={sheduleImg} alt="#" width="80%" height="80%" />
          <p>
            Cáp quang FTTH VIETTEL – Công nghệ mới với tốc độ gấp khoảng 200 lần
            so với công nghệ ADSL, cùng những tính năng ưu việt: Đường truyền ổn
            định, bảo mật an toàn; Không bị ảnh hưởng nhiều từ thời tiết; Thủ
            tục lắp đặt nhanh chóng, chuyên nghiệp. Đối với Khách hàng gia đình
            tại Cần Thơ, chỉ cần đăng ký từ gói NET1PLUS là có thể đáp ứng tốt
            nhu cầu giải trí, xem truyền hình, xem phim chất lượng cao, Game
            Online… Đối với Doanh nghiệp sử dụng từ gói F90N trở lên có thể đáp
            ứng nhu cầu cho dịch vụ Mạng riêng ảo, Hội nghị truyền hình.
          </p>
        </div>

        {/* END-Schedule */}
      </div>
      {/* Start LIST branch */}
      {/* <div className="container-branch">
        <h3>DANH SÁCH CHI NHÁNH VIETTEL Ở CẦN THƠ</h3>

        <div className="container">
          <div className="row branch">
            <div className="col-md-6 branch-content">
              <div className="branch">
                <div className="branch-img">
                  <img src={nkImg} alt="#" width="100%" height="100%" />
                </div>
                <div className="branch-text">
                  <p>Trung tâm Viettel Quận Ninh Kiều </p>
                  <p>Địa chỉ: 210 Trần Phú, Q.Ninh Kiều, Tp. Cần Thơ</p>
                  <p>
                    Địa chỉ web: <Link to="#"> viettelcantho.vn </Link>
                  </p>
                  <p>Số điện thoại : 098.621.621</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 "></div>
          </div>
        </div>
      </div> */}
      <Branch branchs={listBranch}/>
      {/* End LIST branch */}
    </>
  );
}

export default MainContent;
