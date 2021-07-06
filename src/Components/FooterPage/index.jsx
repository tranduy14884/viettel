import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "./style.css";
import logoFooter from "../../asset/img/logo-footer.png";
import { useState } from 'react';
import adminApi from '../../api/adminApi';

function FooterPage(props) {
    const [adminPhone, setAdminPhone] = useState([]);
    useEffect(()=>{
        const getData = async ()=>{
            const dataAdmin = await adminApi.getAll();
            setAdminPhone(dataAdmin[0].phone);
        }
        getData();
    },[]);
    const phoneFormat = (input) => {
        if(!input || isNaN(input)) return `input must be a number was sent ${input}`
        if(typeof(input) !== 'string') input = input.toString()
        if(input.length === 9){
          return input.replace(/(\d{2})(\d{3})(\d{4})/, "$1.$2.$3");
        } 
      }
    return (
        <>
        <div className="footer-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://www.viettelhochiminh.vn/vnt_upload/File/11_2020/logofoter.png" alt="#" />
                        <h4>VIETTEL CẦN THƠ</h4>
                        <p>Viettel Tp Cần thơ cung cấp  các dịch vụ: internet cáp quang, truyền hình, các dịch vụ di động và giải pháp dành cho doanh nghiệp</p>
                        <p>Tổng đài hỗ trợ : <a href={`tel: 0${adminPhone}`}>0{phoneFormat(adminPhone)}</a> </p>
                        <p>Email : viettelcantho@gmail.com</p>
                        <p>Địa chỉ : 210 Trần Phú, Q. Ninh Kiều, Tp. Cần Thơ</p>
                    </div>
                    <div className="col-md-3">
                        <p>DỊCH VỤ DOANH NGHIỆP</p>
                        <p>Chữ ký số</p>
                        <p>Hóa đơn điện tử</p>
                        <p>Bảo hiểm xã hội vBHXH</p>
                        <p>Dịch vụ thuê đầu số </p>
                        <p>Vtracking</p>
                    </div>
                    <div className="col-md-3">
                        <p>INTERNET - TRUYỀN HÌNH</p>
                        <p>Internet</p>
                        <p>Truyền hình</p>
                        <p>Combo Internet - Truyền hình</p>
                    </div>
                    <div className="col-md-3">
                        <p>HỖ TRỢ KHÁCH HÀNG</p>
                        <p>Tổng đài Viettel</p>
                        <p>Khuyến mãi</p>
                        <p>Liên hệ</p>

                    </div>
                </div>
                
            </div>
        </div>
        <div className="footer-page-last">
            <ul>
                <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            </ul>
            <p>Copyright © 2020 Viettel Cần Thơ. All Rights Reserved</p>
        </div>
        </>
    );
}

export default FooterPage;