import React from 'react';
import PropTypes from 'prop-types';
import "./style.css";
import {Link} from "react-router-dom";
Service.propTypes = {
    listService : PropTypes.array,
};

function Service(props) {
    const {listService} = props;
    return (
        <div className="container-news">
        {listService.map((item) => {
          return (
            <Link className="news" to="#" key={Math.random()}>
              <div className="news-img">
                <img
                  src={item.thumnailUrl}
                  alt="#"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="news-text">
                <h5>
                  {item.title}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    );
}

export default Service;