import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Slider from "react-slick";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
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
  //check witdh to change carousel
  let checkWitdh = false;
  if (window.innerWidth < 994) {
    checkWitdh = true;
  }
  const settings2 = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidersPerRow: 1,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,

    slickPrev: ['<i class="fas fa-chevron-circle-left"></i>'],
    slickNext: ['<i class="fas fa-chevron-circle-right"></i>'],
  };
  //custom dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="owl-carousel owl-theme">
        {checkWitdh ? (
          <>
          <Slider {...settings2}>
            {boxs.map((item) => (
              <div className="container-item" key={item.id}>
                <div className="item">
                  <a href="#" className="item-content-family">
                    <div>
                      <h4 className="h4-boxtv">
                        {item.name} &nbsp; {item.speed}
                      </h4>
                    </div>
                    <div className="item-content-info">
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
                        <h6>
                          {item.boxtv} BoxTV + {item.modem} Modem
                          <hr />
                        </h6>
                      </div>
                      <div className="btn-register">
                        <button onClick={handleClickOpen}>Đăng ký ngay</button>
                      </div>
                      <div className="container-sale">
                        <div className="sale">Sale</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
          </>
          
        ) : (
          <>
          <Slider {...settings}>
            {boxs.map((item) => (
              <div className="container-item" key={item.id}>
                <div className="item">
                  <div  className="item-content-family">
                    <div>
                      <h4 className="h4-boxtv">
                        {item.name} &nbsp; {item.speed}
                      </h4>
                    </div>
                    <div className="item-content-info">
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
                        <h6>
                          {item.boxtv} BoxTV + {item.modem} Modem
                          <hr />
                        </h6>
                      </div>
                      <div className="btn-register">
                        <button onClick={handleClickOpen}>Đăng ký ngay</button>
                      </div>
                      <div className="container-sale">
                        <div className="sale">Sale</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
          </>
        )}
      </div>
    </div>
  );
}

export default BoxTV;
