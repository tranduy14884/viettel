import React from "react";
import "./style.css";
import line from "../../asset/img/line.png"
function Line(props) {
  return (
    <div className="container container-line">
      <div className="line">
          <div className="line-img"><img src={line} alt="#" width="200px" height="40px" /></div>
      </div>
    </div>
  );
}

export default Line;
