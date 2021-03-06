import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import SideBar from "../../Components/SideBar";
import AdHeader from "../../Components/AdHeader";
import AdFooter from "../../Components/AdFooter";
import FamilyList from "../AdFamily/Components/FamilyList";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import familyApi from "../../../api/familyApi";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import adminApi from "../../../api/adminApi";
import { set } from "react-hook-form";
function AdPage(props) {
  const match = useRouteMatch();
  const [dataAdmin, setDataAdmin] = useState([{}]);
  const infoAdmin = useSelector((state) => state.admin.current);
  // console.log(infoAdmin);
  useEffect(() => {
    const getData = async () => {
      const dataApi = await adminApi.getAll();
      setDataAdmin(dataApi);
    };
    getData();
  }, []);
console.log(dataAdmin);
  const nameForm = useRef();
  const passwordOldForm = useRef();
  const passwordNewForm = useRef();
  const repeatPasswordNewForm = useRef();
  const phoneForm = useRef();

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [txtErrPwd, setTxtErrPwd] = useState("");
  const [txtErr, setTxtErr] = useState("");
  const handleChangePassword = async () => {
    try {
      setTxtErr("");
      if (
        passwordNewForm.current.value === "" ||
        repeatPasswordNewForm.current.value === "" ||
        passwordOldForm.current.value === ""
      ) {
        setTxtErr("Thông tin chưa hợp lệ");
      } else if (
        passwordNewForm.current.value === repeatPasswordNewForm.current.value
      ) {
        setTxtErrPwd("");
        setTxtErr("");
        const dataForm = {
          passwordOld: passwordOldForm.current.value,
          passwordNew: passwordNewForm.current.value,
          id: infoAdmin._id,
        };
        await adminApi.update(dataForm);
        handleClose();
        history.push("/admin");
        enqueueSnackbar("Đổi mật khẩu thành công !", { variant: "success" });
      } else {
        setTxtErrPwd("Nhập lại mật khẩu chưa đúng !");
      }
    } catch (error) {
      setTxtErr("Mật khẩu cũ nhập chưa đúng !");
      //   console.log('Loi');
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };
  const [passwordShown3, setPasswordShown3] = useState(false);
  const togglePasswordVisiblity3 = () => {
    setPasswordShown3(passwordShown3 ? false : true);
  };

  //dialog phone
  const [openPhone, setOpenPhone] = React.useState(false);

  const handleClickOpenPhone = () => {
    setOpenPhone(true);
  };

  const handleClosePhone = () => {
    setOpenPhone(false);
  };
  //handling phone
  const handleChangePhone = async () => {
    if (phoneForm.current.value.length === 9) {
      const dataPhone = {
        phone: parseInt(phoneForm.current.value),
        id : infoAdmin._id
      };
      // console.log(dataPhone);
      await adminApi.update(dataPhone);
      handleClosePhone();
      enqueueSnackbar('Cập nhật số điện thoại thành công', {
        variant : 'success'
      });
      history.push("/admin");
     
    }
    else{
      handleClosePhone();
      enqueueSnackbar('Số điện thoại chưa hợp lệ, vui lòng thử lại sau', {
        variant : 'error'
      });
    }
   
  };
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
              <Link to="/Admin/adminpage">Thông tin admin</Link>
            </span>
            <h3>Thông tin admin</h3>
          </div>
          {/* Form */}
          <div className="container form-add-data">
            <div className="form-fix form-admin">
              <p>Tên tài khoản</p>
              <span>
                <input type="text" defaultValue={dataAdmin[0].username} disabled />
              </span>
              <p>Mật khẩu</p>
              <span>
                <input type="password" defaultValue={infoAdmin.password} />
                <button className="btn-change-admin" onClick={handleClickOpen}>
                  Thay đổi
                </button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Thay đổi mật khẩu"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div className="form-change-password">
                        <div>
                          <input
                            type={passwordShown ? "text" : "password"}
                            placeholder="Nhập mật cũ"
                            ref={passwordOldForm}
                          />
                          <i
                            class="fas fa-eye"
                            onClick={togglePasswordVisiblity}
                          ></i>
                        </div>
                        <div>
                          <input
                            type={passwordShown2 ? "text" : "password"}
                            placeholder="Nhập mật khẩu mới "
                            ref={passwordNewForm}
                          />
                          <i
                            class="fas fa-eye"
                            onClick={togglePasswordVisiblity2}
                          ></i>
                        </div>
                        <div>
                          <input
                            type={passwordShown3 ? "text" : "password"}
                            placeholder="Nhập lại mật khẩu mới "
                            ref={repeatPasswordNewForm}
                          />
                          <i
                            class="fas fa-eye"
                            onClick={togglePasswordVisiblity3}
                          ></i>
                          <div className="data-form-error">{txtErrPwd}</div>
                          <div className="data-form-error">{txtErr}</div>
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Hủy bỏ
                    </Button>
                    <Button onClick={handleChangePassword} color="primary">
                      Xác nhận
                    </Button>
                  </DialogActions>
                </Dialog>
              </span>
              <p>Số điện thoại (+84) : </p>
              <span>
                <input
                  type="number"
                  ref={phoneForm}
                  defaultValue={dataAdmin[0].phone}
                />
                <button
                  className="btn-change-admin"
                  onClick={handleClickOpenPhone}
                >
                  Thay đổi
                </button>
              </span>
              <Dialog
                open={openPhone}
                onClose={handleClosePhone}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Bạn có xác nhận thay đổi số điện thoại"}
                </DialogTitle>
                {/* <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </DialogContentText>
                </DialogContent> */}
                <DialogActions>
                  <Button onClick={handleClosePhone} color="primary">
                    Hủy bỏ
                  </Button>
                  <Button onClick={handleChangePhone} color="primary">
                    Đồng ý
                  </Button>
                </DialogActions>
              </Dialog>
            </div>

            {/* <p>{data.fullYear}</p> */}
          </div>

          {/* end Content Row */}
        </div>
      </div>
    </div>
  );
}

export default AdPage;
