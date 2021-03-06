import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Slider from "react-slick";
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
import orderApi from "../../../../api/orderApi";

BoxTV.propTypes = {
  boxs: PropTypes.array,
  listPackets: PropTypes.array,
};

function BoxTV(props) {
  const { boxs, listPackets } = props;
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,

    autoplaySpeed: 60000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnFocus: true,
    slickPrev: ['<i className="fas fa-chevron-circle-left"></i>'],
    slickNext: ['<i className="fas fa-chevron-circle-right"></i>'],
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
    speed: 2000,
    autoplay: true,
    slidersPerRow: 1,
    autoplaySpeed: 60000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnFocus: true,
    slickPrev: ['<i className="fas fa-chevron-circle-left"></i>'],
    slickNext: ['<i className="fas fa-chevron-circle-right"></i>'],
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
    fullName: yup.string().required("Th??ng tin ch??a h???p l???"),
    location: yup.string().required("Th??ng tin ch??a h???p l???"),
    // packet: yup.number().required("Th??ng tin ch??a h???p l???"),
    phone: yup
      .number()
      .integer()
      .typeError("Vui l??ng nh???p s??? !")
      .required("Th??ng tin ch??a h???p l???")
      .max(999999999, "S??? ??i???n tho???i ch??a h???p l??? !")
      .min(111111111, "S??? ??i???n tho???i ch??a h???p l??? !"),
    // .max(10,'S??? ??i???n tho???i ph???i ????? 10 s???'),
  });
  // custom form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  let checkPacket = 1;
  const [textErrorPacket, setTextErrorPacket] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const timeOrder = new Date();
  const onSubmit = async (data) => {
    const dataNews = {
      name: data.fullName,
      phone: data.phone,
      location: data.location,
      packet: data.packet,
      status: 0,
      time: `${timeOrder.getDate()}-${timeOrder.getMonth()+1}-${timeOrder.getFullYear()}`,
      packet: packet,
    };

    console.log(dataNews);
    if (dataNews.packet == "") {
      checkPacket = 2;
    } else {
      checkPacket = 1;
    }
    if (checkPacket == 2) {
      setTextErrorPacket("Vui l??ng ch???n g??i c?????c !");
    } else if (checkPacket == 1) {
      setTextErrorPacket("");
    }
    if (
      typeof dataNews.name !== "undefined" &&
      typeof dataNews.location !== "undefined" &&
      typeof dataNews.phone !== "undefined" &&
      checkPacket == 1
    ) {
      // console.log(dataNews);
      await orderApi.add(dataNews);
      reset();
      handleClose();
      enqueueSnackbar("????ng k?? th??nh c??ng", { variant: "success" });
    }
  };
  const [packet, setPacket] = useState("");

  const handleChange = (event) => {
    setPacket(event.target.value);
  };

  return (
    <div>
      <div className="owl-carousel owl-theme">
        {checkWitdh ? (
          <>
            <Slider {...settings2}>
              {boxs.map((item) => (
                <div className="container-item" key={Math.random()}>
                  <div className="item">
                    <div href="#" className="item-content-family">
                      <div>
                        <h4 className="h4-boxtv">
                          {item.name} <br /> {item.speed}
                        </h4>
                      </div>
                      <div className="item-content-info">
                        <span className="item-price">
                          {formatter.format(item.price)}
                        </span>
                        <span className="unit-price">??/Th??ng</span>
                        <div className="container halfYear">
                          <h6>Tr??? tr?????c 6 th??ng </h6>
                          <h6>T???ng {item.halfYear} th??ng</h6>
                          <hr />
                        </div>
                        <div className="container fullYear">
                          <h6>Tr??? tr?????c 12 th??ng </h6>
                          <h6>T???ng {item.fullYear} th??ng</h6>
                          <hr />
                        </div>
                        <div className="prepare">
                          <h6>
                            T???ng :{" "}
                            <span className="bonus">
                              {item.boxtv} BoxTV + {item.modem} Modem
                            </span>
                            <hr />
                          </h6>
                        </div>
                        <div className="support">
                          <p>Mi???n ph?? l???p ?????t</p>
                          <hr />
                        </div>
                        <div className="btn-register">
                          <button onClick={handleClickOpen}>
                            ????ng k?? ngay
                          </button>
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
                <div className="img-dialog-title">
                  <img src={logo} alt="logo" />
                </div>
              </DialogTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  id="outlined-basic"
                  label="H??? t??n kh??ch h??ng "
                  variant="outlined"
                  fullWidth
                  {...register("fullName")}
                />
                <div className="data-form-error">
                  {errors.fullName?.message}
                </div>
                <TextField
                  id="outlined-basic"
                  label="?????a ch??? "
                  variant="outlined"
                  fullWidth
                  {...register("location")}
                />
                <div className="data-form-error">
                  {errors.location?.message}
                </div>

                <TextField
                  id="outlined-basic"
                  label="S??? ??i???n tho???i : (+84) "
                  variant="outlined"
                  fullWidth
                  {...register("phone")}
                />
                <div className="data-form-error">{errors.phone?.message}</div>

                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    G??i c?????c
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={packet}
                    onChange={handleChange}
                    label="G??i c?????c"
                  >
                    {listPackets.map((item) => {
                      return (
                        <MenuItem value={item.name} key={item.name}>
                          {item.name} - {item.speed} -{" "}
                          {formatter.format(item.price)}VN??
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {checkPacket && (
                  // <p className="data-form-error">{textErrorPacket}</p>
                  <div className="data-form-error">{textErrorPacket}</div>
                )}

                <div className="container-btn">
                  <button className="btn-comfirm" type="submit">
                    ?????ng ??
                  </button>{" "}
                  <div onClick={handleClose} className="btn-cancel">
                    H???y b???
                  </div>
                </div>
              </form>
            </Dialog>
          </>
        ) : (
          <>
            <Slider {...settings}>
              {boxs.map((item) => (
                <div className="container-item" key={Math.random()}>
                  <div className="item">
                    <div className="item-content-family">
                      <div>
                        <h4 className="h4-boxtv">
                          {item.name} <br /> {item.speed}
                        </h4>
                      </div>
                      <div className="item-content-info">
                        <span className="item-price">
                          {formatter.format(item.price)}
                        </span>
                        <span className="unit-price">??/Th??ng</span>
                        <div className="container halfYear">
                          <h6>Tr??? tr?????c 6 th??ng </h6>
                          <h6>T???ng {item.halfYear} th??ng</h6>
                          <hr />
                        </div>
                        <div className="container fullYear">
                          <h6>Tr??? tr?????c 12 th??ng </h6>
                          <h6>T???ng {item.fullYear} th??ng</h6>
                          <hr />
                        </div>
                        <div className="prepare">
                          <h6>
                            T???ng :{" "}
                            <span className="bonus">
                              {item.boxtv} BoxTV + {item.modem} Modem
                            </span>
                            <hr />
                          </h6>
                        </div>
                        <div className="support">
                          <p>Mi???n ph?? l???p ?????t</p>
                          <hr />
                        </div>

                        <div className="btn-register">
                          <button onClick={handleClickOpen}>
                            ????ng k?? ngay
                          </button>
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
                <div>
                  <img src={logo} alt="logo" height="100px" width="250px" />
                </div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      id="outlined-basic"
                      label="H??? t??n kh??ch h??ng "
                      variant="outlined"
                      fullWidth
                      {...register("fullName")}
                    />
                    <div className="data-form-error">
                      {errors.fullName?.message}
                    </div>
                    <TextField
                      id="outlined-basic"
                      label="?????a ch??? "
                      variant="outlined"
                      fullWidth
                      {...register("location")}
                    />
                    <div className="data-form-error">
                      {errors.location?.message}
                    </div>
                    <TextField
                      id="outlined-basic"
                      label="S??? ??i???n tho???i : (+84) "
                      variant="outlined"
                      fullWidth
                      {...register("phone")}
                    />
                    <div className="data-form-error">
                      {errors.phone?.message}
                    </div>
                    <FormControl variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label">
                        G??i c?????c
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={packet}
                        onChange={handleChange}
                        label="G??i c?????c"
                      >
                        {listPackets.map((item) => {
                          return (
                            <MenuItem value={item.name} key={item.name}>
                              {item.name} - {item.speed} -{" "}
                              {formatter.format(item.price)}VN??
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                    {checkPacket && (
                      // <p className="data-form-error">{textErrorPacket}</p>
                      <div className="data-form-error">{textErrorPacket}</div>
                    )}

                    <div className="container-btn">
                      <button className="btn-comfirm" type="submit">
                        ?????ng ??
                      </button>{" "}
                      <div onClick={handleClose} className="btn-cancel">
                        H???y b???
                      </div>
                    </div>
                  </form>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
    </div>
  );
}

export default BoxTV;
