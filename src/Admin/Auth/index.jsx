import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./style.css";
function AdminDangNhap(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState({});

  const handlEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlPassword = (e) => {
    setPassword(e.target.value);
  };
//   const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const hanldeSubmit = async () => {
    // try {
    //   const value = {
    //     email: email,
    //     password: password,
    //   };
    //   const action = loginAdmin(value);
    //   const resultAction = await dispatch(action);
    //   unwrapResult(resultAction);

    //   return history.push("/Admin");
    // } catch (error) {
    //   enqueueSnackbar(error.message, { variant: "error" });
    // }
  };
  return (
    <div className="contaner-admin">
      <div className="container Adminlogin">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Đăng nhập</h1>
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          onChange={handlEmail}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          onChange={handlPassword}
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                        onClick={hanldeSubmit}
                      >
                        Login
                      </button>
                      <hr />

                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDangNhap;
