import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Slider from "react-slick";

BoxTV.propTypes = {
  boxs: PropTypes.array,
};

function BoxTV(props) {
  const { boxs } = props;
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,

    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,

    slickPrev: ['<i class="fas fa-chevron-circle-left"></i>'],
    slickNext: ['<i class="fas fa-chevron-circle-right"></i>'],
  };

  //   format number
  const formatter = new Intl.NumberFormat("es");
  return (
    <div>
      <div className="owl-carousel owl-theme">
        <Slider {...settings}>
          {boxs.map((item) => (
            <div className="container-item" key={item.id}>
              <div className="item">
                <a href="#" className="item-content-family">
                  <div>
                    <h4 className="h4-boxtv">
                      {item.name} &nbsp; {item.speed}
                    </h4>
                  </div>
                  <span className="item-price">
                    {formatter.format(item.price)}
                  </span>
                  <span>Đ/Tháng</span>
                  <div className="container halfYear">
                    <h6>Trả trước 6 tháng </h6>
                    <h6>Tặng {item.halfYear} tháng</h6>
                    <p>Miễn phí lắp đặt</p>
                    <hr />
                  </div>
                  <div className="container fullYear">
                    <h6>Trả trước 12 tháng </h6>
                    <h6>Tặng {item.fullYear} tháng</h6>
                    <p>Miễn phí lắp đặt</p>
                    <hr />
                  </div>
                  <div className="prepare">
                    <h6>{item.boxtv} BoxTV + {item.modem} Modem</h6>
                  </div>
                  <div className="container-sale">
                    <div className="sale">Sale</div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BoxTV;
