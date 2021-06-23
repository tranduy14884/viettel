import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "./style.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import logo from "../../../../asset/img/logo.png";
import { useSnackbar } from "notistack";
Company.propTypes = {
  families: PropTypes.array,
  combos : PropTypes.array,
  companies : PropTypes.array,
};
const schema = yup.object().shape({
  fullName: yup.string().required("Thông tin chưa hợp lệ"),
  location: yup.string().required("Thông tin chưa hợp lệ"),
  // packet: yup.number().required("Thông tin chưa hợp lệ"),
  phone: yup
    .number()
    .integer()
    .typeError("Vui lòng nhập số !")
    .required("Thông tin chưa hợp lệ")
    .max(999999999, "Số điện thoại phải ít nhât là 10 số !"),
  // .max(10,'Số điện thoại phải đủ 10 số'),
});
function Company(props) {
  // const { companies, combos, families } = props;
  const { companies} = props;
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,

    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnFocus : true,
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
    pauseOnFocus : true,
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
  const schema = yup.object().shape({
    fullName: yup.string().required("Thông tin chưa hợp lệ"),
    location: yup.string().required("Thông tin chưa hợp lệ"),
    // packet: yup.number().required("Thông tin chưa hợp lệ"),
    phone: yup
      .number()
      .integer()
      .typeError("Vui lòng nhập số !")
      .required("Thông tin chưa hợp lệ")
      .max(999999999,'Số điện thoại phải ít nhât là 10 số !')
      // .max(10,'Số điện thoại phải đủ 10 số'),
  });
 
  // custom form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });
  let checkPacket = 1;
  const [textErrorPacket, setTextErrorPacket] = useState("");
  const {enqueueSnackbar} = useSnackbar();

  const onSubmit = (data) => {
    const dataNews = data;
    dataNews.packet = packet;

    if (dataNews.packet == "") {
      checkPacket = 2;
    } else {
      checkPacket = 1;
    }
    if (checkPacket == 2) {
      setTextErrorPacket("Vui lòng chọn gói cước !");
    } else if (checkPacket == 1) {
      setTextErrorPacket("");
      
    }
    if(typeof dataNews.fullName !== 'undefined' && typeof dataNews.location !== 'undefined' 
    && typeof dataNews.phone !=='undefined' && checkPacket == 1)
    {
      reset();
      handleClose();
      enqueueSnackbar('Đăng ký thành công', {variant : 'success'});
    }
  };
  const [packet, setPacket] = useState("");

  const handleChange = (event) => {
    setPacket(event.target.value);
  };
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
  const listPacket = [...families, ...boxs, ...companies];
  return (
    <div className="owl-carousel owl-theme">
      {checkWitdh ? (
        <>
          <Slider {...settings2}>
            {companies.map((item) => (
              <div className="container-item" key={item.id}>
                <div className="item">
                  <div className="item-content-family">
                    <div>
                      <h4 className="h4Company">
                        {item.name} &nbsp; {item.speed}
                      </h4>
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
                        <div className="container raderFullYear">
                          <h6>Trả trước 18 tháng </h6>
                          <h6>Tặng {item.raderFullYear} tháng</h6>
                          <p>Miễn phí lắp đặt</p>
                          <hr />
                        </div>
                        <div className="container container-ip">
                          <h6>
                            IP tĩnh <span className="ip">{item.Ip}</span>
                          </h6>
                          <hr />
                        </div>
                        <div className="btn-register">
                          <button onClick={handleClickOpen}>
                            Đăng ký ngay
                          </button>
                        </div>
                        <div className="container-sale">
                          <div className="sale">Sale</div>
                        </div>
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
            <div className="img-dialog-title">
                <img src={logo} alt="logo" />
              </div>
            </DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    id="outlined-basic"
                    label="Họ tên khách hàng "
                    variant="outlined"
                    fullWidth
                    {...register("fullName")}
                  />
                  <div className="data-form-error">{errors.fullName?.message}</div>

                  <TextField
                    id="outlined-basic"
                    label="Địa chỉ "
                    variant="outlined"
                    fullWidth
                    {...register("location")}
                  />
                  <div className="data-form-error">{errors.location?.message}</div>

                  <TextField
                    id="outlined-basic"
                    label="Số điện thoại "
                    variant="outlined"
                    fullWidth
                    {...register("phone")}
                  />
                  <div className="data-form-error">{errors.phone?.message}</div>

                  <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Gói cước
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={packet}
                      onChange={handleChange}
                      label="Gói cước"
                    >
                      {
                        listPacket.map(item =>{
                          return (
                            <MenuItem value={item.name} key={item.name}>{item.name} - {item.speed} - {formatter.format(item.price)}VNĐ</MenuItem>
                          )
                        })
                      }
                    </Select>
                  </FormControl>
                  {
                    checkPacket && (
                      // <p className="data-form-error">{textErrorPacket}</p>
                  <div className="data-form-error">{textErrorPacket}</div>

                    )
                  }
                 

                  <div className="container-btn">
                    <button className="btn-comfirm" type="submit">
                      Đồng ý
                    </button>{" "}
                    <button onClick={handleClose} className="btn-cancel">
                      Hủy bỏ
                    </button>
                  </div>
                </form>
          </Dialog>
        </>
      ) : (
        <>
          <Slider {...settings}>
            {companies.map((item) => (
              <div className="container-item" key={item.id}>
                <div className="item">
                  <div className="item-content-family">
                    <div>
                      <h4 className="h4Company">
                        {item.name} &nbsp; {item.speed}
                      </h4>
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
                        <div className="container raderFullYear">
                          <h6>Trả trước 18 tháng </h6>
                          <h6>Tặng {item.raderFullYear} tháng</h6>
                          <p>Miễn phí lắp đặt</p>
                          <hr />
                        </div>
                        <div className="container container-ip">
                          <h6>
                            IP tĩnh <span className="ip">{item.Ip}</span>
                          </h6>
                          <hr />
                        </div>
                        <div className="btn-register">
                          <button onClick={handleClickOpen}>
                            Đăng ký ngay
                          </button>
                        </div>
                        <div className="container-sale">
                          <div className="sale">Sale</div>
                        </div>
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
              <div >
                <img src={logo} alt="logo" height="100px" width="250px" />
              </div>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    id="outlined-basic"
                    label="Họ tên khách hàng "
                    variant="outlined"
                    fullWidth
                    {...register("fullName")}
                  />
                  <div className="data-form-error">{errors.phone?.message}</div>
                  
                  <TextField
                    id="outlined-basic"
                    label="Địa chỉ "
                    variant="outlined"
                    fullWidth
                    {...register("location")}
                  />
                  <div className="data-form-error">{errors.location?.message}</div>
                  <TextField
                    id="outlined-basic"
                    label="Số điện thoại "
                    variant="outlined"
                    fullWidth
                    {...register("phone")}
                  />
                  <div className="data-form-error">{errors.phone?.message}</div>

                  <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Gói cước
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={packet}
                      onChange={handleChange}
                      label="Gói cước"
                    >
                      {
                        listPacket.map(item =>{
                          return (
                            <MenuItem value={item.name} key={item.name}>{item.name} - {item.speed} - {formatter.format(item.price)}VNĐ</MenuItem>
                          )
                        })
                      }
                    </Select>
                  </FormControl>
                  {
                    checkPacket && (
                      <div className="data-form-error">{textErrorPacket}</div>
                    )
                  }
                 

                  <div className="container-btn">
                    <button className="btn-comfirm" type="submit">
                      Đồng ý
                    </button>{" "}
                    <button onClick={handleClose} className="btn-cancel">
                      Hủy bỏ
                    </button>
                  </div>
                </form>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}

export default Company;
