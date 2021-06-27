import React from "react";
import PropTypes from "prop-types";
import "./style.css";
Mainbar.propTypes = {};

function Mainbar(props) {
  return (
    <div className="container container-mainbar">
      <div className="menu-bar">
        
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
          <a class="navbar-brand" href="#">
            Menu
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                Trang nhất
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#location">
                Quận, huyện
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                Gói cáp quang
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                Tiện ích
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Mainbar;
