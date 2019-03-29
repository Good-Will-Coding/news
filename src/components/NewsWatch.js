import React from "react";
import { Link } from "react-router-dom";

const NewsWatch = ({ newsWatch }) => {
  const getNewsWatch = () => {
    if (newsWatch) {
      return newsWatch.articles.map(item => {
        return (
          <div className="newswatch-card">
            <Link
              className="newswatch-card-content"
              style={{ background: `url(${item.urlToImage})` }}
            >
              <div className="description">
                <span>{item.title}</span>
                <div>{item.description}</div>
              </div>
            </Link>
          </div>
        );
      });
    }
  };
  return <div className="newswatch-container">{getNewsWatch()}</div>;
};

export default NewsWatch;
