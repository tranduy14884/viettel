import React from "react";
import "./style.css";
// import line from "../../asset/img/line.png"
import line2 from "../../asset/img/line-2.png"
function Line(props) {
  return (
    <div className="container container-line">
      <div className="line">
          <div className="line-img"><img src={line2} alt="#" width="350px" height="70px" /></div>
      </div>
    </div>
  );
}

export default Line;
