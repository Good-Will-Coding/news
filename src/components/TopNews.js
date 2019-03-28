import React from "react";
import { Link } from "react-router-dom";

function TopNews({ latest }) {
  console.log(latest);
  const showTopNews = () => {
    if (latest) {
      return latest.articles.map(item => {
        return (
          <Link to={`/news/${item.title}`} key={item.url} className="item">
            <div
              className="image_cover"
              style={{ background: `url(${item.urlToImage})` }}
            >
              <div className="description">
                <span>{item.title}</span>
                <div>{item.description}</div>
              </div>
            </div>
          </Link>
        );
      });
    }
  };

  return <div className="home-topnews">{showTopNews()}</div>;
}

export default TopNews;
