import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";
News.propTypes = {
  news: PropTypes.array,
};

function News(props) {
  const { news } = props;
  return (
    <div className="container-news">
      {news.map((item) => {
        return (
          <Link className="news" to="#" key={item.id}>
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

export default News;
