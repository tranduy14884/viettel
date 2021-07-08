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
import SmartHome from "../SmartHome";
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
import superApi from "../../../../api/superApi";
import adminApi from "../../../../api/adminApi";
import eventNewsApi from "../../../../api/eventNewsApi";
import serviceApi from "../../../../api/serviceApi";
MainContent.propTypes = {};

function MainContent(props) {
 
  const listBranch = [
    {
      id: 1,
      name: "Trung tâm Viettel Quận Ninh Kiều",
      location: "210 Trần Phú, Q.Ninh Kiều, Tp. Cần Thơ",
      web: "viettelcantho.vn",
      thumnailUrl: "https://viettel.cantho.vn/files/images/CTO.jpg",
    },
    {
      id: 2,
      name: "Trung tâm Viettel Quận Bình Thủy",
      location: "23 Đường Cách Mạng Tháng 8, P, Bình Thủy, Cần Thơ 900000",
      web: "viettelcantho.vn",
      thumnailUrl:
        "https://i1.wp.com/netviettel.com/wp-content/uploads/2020/10/Viettel-Binh-Thuy-Can-Tho.jpg?ssl=1",
    },
    {
      id: 3,
      name: "Trung tâm Viettel Quận Ô Môn",
      location: "Tòa Nhà Viettel, Ô Môn, Cần Thơ 904001",
      web: "viettelcantho.vn",
      thumnailUrl:
        "https://i0.wp.com/netviettel.com/wp-content/uploads/2020/10/Viettel-O-Mon-Can-Tho.jpg?ssl=1",
    },
    {
      id: 4,
      name: "Trung tâm Viettel Quận Cái Răng",
      location: "Tòa Nhà Viettel, Cái Răng, Cần Thơ ",
      web: "viettelcantho.vn",
      thumnailUrl:
        "https://viettel.cantho.vn/files/images/TNT.jpg",
    },
  ];
 
  const [news, setNews] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      const dataApi = await eventNewsApi.getAll();
      setNews(dataApi);
      
      const dataServiceApi = await serviceApi.getAll();
      setServices(dataServiceApi);
    }
    getData();
  },[]);
  
  const [families, setFamylies] = useState([]);
  const [boxs, setBoxs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [smartHome, setSmartHome] = useState([]);
  const [adminPhone, setAdminPhone] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const datafamilyApi = await familyApi.getAll();
      setFamylies(datafamilyApi);

      const dataAdmin = await adminApi.getAll();
      setAdminPhone(dataAdmin[0].phone);

      const dataComboApi = await comboApi.getAll();
      setBoxs(dataComboApi);

      const datacompanyApi = await companyApi.getAll();
      setCompanies(datacompanyApi);

      const dataSmartHome = await superApi.getAll();
      setSmartHome(dataSmartHome);
      
 
    };
    getData();
  }, []);
  // console.log(adminPhone);
  const listPackets = [...families, ...boxs, ...companies, ...smartHome];
  //format number phone
  const phoneFormat = (input) => {
    if(!input || isNaN(input)) return `input must be a number was sent ${input}`
    if(typeof(input) !== 'string') input = input.toString()
    if(input.length === 9){
      return input.replace(/(\d{2})(\d{3})(\d{4})/, "$1.$2.$3");
    } 
  }
  
  // console.log(phoneFormat(123456789));
  return (
    <>
      <div>
        <div className="contact">
          <a class="button">Tổng đài tư vấn khách hàng : 0{phoneFormat(adminPhone)}</a>
        </div>
        {/* <!-- Phone --> */}
        <div id="phone-vr" class="button-contact">
          <div class="phone-vr">
            <div class="phone-vr-circle-fill"></div>
            <div class="phone-vr-img-circle">
              <a href={`tel:0${adminPhone}`}>
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
                  <Family families={families} listPackets={listPackets} />
                </div>
                {/* START-LINE */}
                <Line />
                {/* END-LINE */}
                <h3 className="title">Combo Cáp Quang + BoxTV Viettel</h3>
                <div className="boxtv">
                  <BoxTV boxs={boxs} listPackets={listPackets} />
                </div>
                {/* START-LINE */}
                <Line />
                {/* END-LINE */}
                <h3 className="title">Giá cước dành cho doanh nghiệp</h3>
                <div className="boxtv">
                  <Company listPackets={listPackets} companies={companies} />
                </div>
                {/* START-LINE */}
                <Line />
                {/* END-LINE */}
                <h3 className="title">Giá cước thông minh</h3>
                <div className="boxtv">
                  <SmartHome listPackets={listPackets} smartHomes={smartHome} />
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
        <button className="btn-support-phone">0{phoneFormat(adminPhone)}</button>
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
