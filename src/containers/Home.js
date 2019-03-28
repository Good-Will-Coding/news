import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TopNews from "../components/TopNews";
import { getBreakingNews, getEditorsPicks } from "../actions/index";
import EditorPicks from "../components/EditorPicks";

function Home(props) {
  useEffect(() => {
    props.getBreakingNews();
    props.getEditorsPicks();
  }, []);

  const { latest, chosenArticles} = props.getNews;
  return (
    <div>
      <TopNews latest={latest} />
      <EditorPicks editorPicks={chosenArticles} />
    </div>
  );
}

const mapStateToProps = state => {
  const { getNews } = state;
  return {
    getNews
  };
};

const mapDispatchToProps = {
  getBreakingNews,
  getEditorsPicks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
