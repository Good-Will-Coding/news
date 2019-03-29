import React from "react";
import { Link } from "react-router-dom";

function HealthSection({ articles }) {
  const getHealthSection = () => {
    if (articles) {
      return articles.articles.map(item => {
        return (
          <div className="healthsection-card">
            <Link className="healthsection-card-content">
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
  return <div className="healthsection-container">{getHealthSection()}</div>;
}

export default HealthSection;
