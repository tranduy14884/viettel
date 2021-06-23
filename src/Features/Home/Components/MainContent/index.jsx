import React from "react";
import sheduleImg from "../../../../asset/img/schedule.png";
import sp1 from "../../../../asset/img/support1.png";
import sp2 from "../../../../asset/img/support2.png";
import sp3 from "../../../../asset/img/support3.png";
import Line from "../../../../Components/Line";
import BoxTV from "../BoxTV";
import Branch from "../Branch";
import Company from "../Company";
import Family from "../Family";
import News from "../News";
import Service from "../Service";
import "./style.css";
import HeaderPage from "../../../../Components/HeaderPage";
import FooterPage from "../../../../Components/FooterPage";
import Mainbar from "../Mainbar";
import { useEffect } from "react";
import { useState } from "react";
import familyApi from "../../../../api/familyApi";
import companyApi from "../../../../api/companyApi";
import comboApi from "../../../../api/comboApi";
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
      id: 1,
      name: "Trung tâm Viettel Quận Ninh Kiều",
      location: "210 Trần Phú, Q.Ninh Kiều, Tp. Cần Thơ",
      web: "viettelcantho.vn",
      phone: "098621621",
      thumnailUrl: "https://viettel.cantho.vn/files/images/CTO.jpg",
    },
    {
      id: 2,
      name: "Trung tâm Viettel Quận Bình Thủy",
      location: "23 Đường Cách Mạng Tháng 8, P, Bình Thủy, Cần Thơ 900000",
      web: "viettelcantho.vn",
      phone: "0292 6251 054",
      thumnailUrl:
        "https://i1.wp.com/netviettel.com/wp-content/uploads/2020/10/Viettel-Binh-Thuy-Can-Tho.jpg?ssl=1",
    },
    {
      id: 3,
      name: "Trung tâm Viettel Quận Ô Môn",
      location: "Tòa Nhà Viettel, Ô Môn, Cần Thơ 904001",
      web: "viettelcantho.vn",
      phone: "0292 6251 054",
      thumnailUrl:
        "https://i0.wp.com/netviettel.com/wp-content/uploads/2020/10/Viettel-O-Mon-Can-Tho.jpg?ssl=1",
    },
    {
      id: 4,
      name: "Trung tâm Viettel Quận Cái Răng",
      location: "Tòa Nhà Viettel, Ô Môn, Cần Thơ 904001",
      web: "viettelcantho.vn",
      phone: "0292 6251 054",
      thumnailUrl:
        "http://viettelcantho.vn/uploads/internet-cap-quang/2018_08/cap-quang-viettel-cai-rang-can-tho.jpg",
    },
  ];
  const news = [
    {
      id: 1,
      title: "Giải pháp học online cho trẻ em – An toàn mùa dịch covid-19",
      thumnailUrl:
        "https://viettelct.com/wp-content/uploads/2021/05/Monkey-Junior-549x3391-1-768x469.jpg",
    },
    {
      id: 2,
      title: "Xu hướng học tiếng anh online trong thời đại công nghệ số",
      thumnailUrl:
        "https://viettelct.com/wp-content/uploads/2021/05/elsa-549x339-1.jpg",
    },
    {
      id: 3,
      title:
        "Viettel tặng 100% lưu lượng data cho người dân tại tâm dịch Bắc Ninh, Bắc Giang",
      thumnailUrl:
        "https://viettelct.com/wp-content/uploads/2021/05/Viettel-hoan-thanh-ket-noi-camera-khu-vuc-cach-ly-768x576.jpg",
    },
  ];
  const services = [
    {
      id: 1,
      title: "Đổi sim 4G",
      thumnailUrl:
        "https://viettelcamau.com.vn/wp-content/uploads/2021/01/800-450_800x450-1.png",
    },
    {
      id: 2,
      title: "Giải pháp Công nghệ thông tin",
      thumnailUrl:
        "https://viettelcamau.com.vn/wp-content/uploads/2021/01/GP.png",
    },
    {
      id: 3,
      title: "Ngân hàng số VIETTELPAY",
      thumnailUrl:
        "https://viettelcamau.com.vn/wp-content/uploads/2021/01/vtp.jpg",
    },
    {
      id: 4,
      title: "Dán thẻ ePass miễn phí",
      thumnailUrl:
        "data:image/jpeg;base64,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",
    },
  ];
  const [Tfamilies, setFamylies] = useState([]);
  const [Tboxs, setBoxs] = useState([]);
  const [Tcompanies, setCompanies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const datafamilyApi = await familyApi.getAll();
      setFamylies(datafamilyApi);

      const dataComboApi = await comboApi.getAll();
      setBoxs(dataComboApi);

      const datacompanyApi = await companyApi.getAll();
      setCompanies(datacompanyApi);
    };
    getData();
  }, []);
  const listPackets = {...Tfamilies};
  console.log(listPackets);
 
  return (
    <>
      <div>
        <div className="contact">
          <a class="button">Tổng đài tư vấn khách hàng : 035.5533.377</a>
        </div>
        {/* <!-- Phone --> */}
        <div id="phone-vr" class="button-contact">
          <div class="phone-vr">
            <div class="phone-vr-circle-fill"></div>
            <div class="phone-vr-img-circle">
              <a href="tel:0355533377">
                <img src="https://seotct.com/wp-content/plugins/button-contact-vr/img/phone.png" />
              </a>
            </div>
          </div>
        </div>

        {/* <!-- end phone --> */}
        {/* START-CONTENT */}
        <div className="container-main-content">
          <div className="container container-content">
            <HeaderPage />
            <Mainbar />
            <div className="row">
              <div className="col-md-9 left-content">
                <h2 className="chu-nhap-nhay">CÁP QUANG VIETTEL</h2>
                {/* START-LINE */}
                <Line />
                {/* END-LINE */}
                <h3 className="title">Giá cước theo hộ gia đình</h3>
                <div className="families">
                  <Family families={families}  />
                </div>
                {/* START-LINE */}
                <Line />
                {/* END-LINE */}
                <h3 className="title">Combo Cáp Quang + BoxTV Viettel</h3>
                <div className="boxtv">
                  <BoxTV boxs={boxs}     />
                </div>
                {/* START-LINE */}
                <Line />
                {/* END-LINE */}
                <h3 className="title">Giá cước dành cho doanh nghiệp</h3>
                <div className="boxtv">
                  <Company    companies={companies}  />
                </div>
              </div>
              <div className="col-md-3 right-content">
                <h2 className="chu-nhap-nhay">TIN TỨC VÀ SỰ KIỆN</h2>
                <News news={news} />
                <h2 className="chu-nhap-nhay">DỊCH VỤ VIETTEL CAN THO</h2>
                <Service listService={services} />
              </div>
            </div>
          </div>
        </div>

        {/* END - START-CONTENT */}
        {/* START supporr-section */}
        <div className="container support-section">
          <div class="wordart slate">
            <span class="text">TỔNG ĐÀI HỖ TRỢ VIETTEL CẦN THƠ </span>
          </div>
        </div>
        <button className="btn-support-phone">035.5533.377</button>
        {/*END  supporr-section */}
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
      <Branch branchs={listBranch} />
      {/* End LIST branch */}

      {/* Start Support customer */}
      <div className="container container-support">
        <h3>CHĂM SÓC KHÁCH HÀNG</h3>
        <h4>INTERNET VÀ TRUYỀN HÌNH VIETTEL</h4>
        <div className="row">
          <div className="col-md-4 branch-content">
            <div className="branch">
              <div className="branch-img">
                <img src={sp1} alt="#" width="300px" height="300px" />
              </div>
              <div className="branch-text support-text">
                <p>HỖ TRỢ KỸ THUẬT</p>
                <p>
                  Tổng đài hỗ trợ 1800.8168, khắc phục sự cố internet cáp quang
                  và truyền hình, hướng dẫn cài đặt mật khẩu…
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 branch-content">
            <div className="branch">
              <div className="branch-img">
                <img src={sp2} alt="#" width="300px" height="300px" />
              </div>
              <div className="branch-text support-text">
                <p>CHÍNH SÁCH THỦ TỤC</p>
                <p>
                  Hướng dẫn thủ tục di chuyển địa điểm, thủ tục nâng cấp gói
                  cước, tạm ngưng dịch vụ…
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 branch-content">
            <div className="branch">
              <div className="branch-img">
                <img src={sp3} alt="#" width="300px" height="300px" />
              </div>
              <div className="branch-text support-text">
                <p>ỨNG DỤNG VÀ APPS</p>
                <p>
                  Các ứng dụng, tiện ích đóng cước, báo hỏng dành riêng cho
                  khách hàng đang sử dụng internet và truyền hình VIETTEL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Support customer */}
    </>
  );
}

export default MainContent;
