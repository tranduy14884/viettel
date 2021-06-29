import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "./adminSlice";
import "./style.css";
function AdminDangNhap(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState({});

  const handlUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlPassword = (e) => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const hanldeSubmit = async () => {
    try {
      const value = {
        username: username,
        password: password,
      };
      // console.log(value);
      const action = login(value);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      return history.push("/Admin");

    } catch (error) {
      enqueueSnackbar('Sai tài khoản hoặc mật khẩu !', { variant: "error" });
    }
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
                          type="text"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Tên đăng nhập"
                          onChange={handlUsername}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Mật khẩu"
                          onChange={handlPassword}
                        />
                      </div>
                  
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                        onClick={hanldeSubmit}
                      >
                        Login
                      </button>
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
