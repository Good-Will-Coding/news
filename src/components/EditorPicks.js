import React from "react";
import { Link } from "react-router-dom";

const EditorPicks = ({ editorPicks }) => {
  const getEditorsPicks = () => {
    if (editorPicks) {
      return editorPicks.articles.map(item => {
        return (
          <div className="editors-card" key={item.name}>
            <Link
              className="editors-card-content"
              style={{ background: `url(${item.urlToImage})` }}
            >
              <div className="description">
                <span>{item.title}</span>
              </div>
            </Link>
          </div>
        );
      });
    }
  };
  return <div className="editors-container">{getEditorsPicks()}</div>;
};

export default EditorPicks;
