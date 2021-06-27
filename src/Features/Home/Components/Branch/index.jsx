import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";

Branch.propTypes = {
  branchs: PropTypes.array,
};

function Branch(props) {
  const { branchs } = props;
  return (
    <div className="container-branch" id="location">
      <h3>DANH SÁCH CHI NHÁNH VIETTEL Ở CẦN THƠ</h3>

      <div className="container">
        <div className="row branch">
          {branchs.map((item) => {
            return (
              <div className="col-md-6 branch-content" key={item.id}>
                <div className="branch">
                  <div className="branch-img">
                    <img
                      src={item.thumnailUrl}
                      alt="#"
                      width="539px"
                      height="400px"
                    />
                  </div>
                  <div className="branch-text">
                    <p>{item.name}</p>
                    <p>Địa chỉ: {item.location}</p>
                    <p>
                      Địa chỉ web: <Link to="#">{item.web} </Link>
                    </p>
                    <p>Số điện thoại : {item.phone}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Branch;
