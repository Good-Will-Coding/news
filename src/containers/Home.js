import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TopNews from "../components/TopNews";
import {
  getBreakingNews,
  getEditorsPicks,
  getNewsWatch
} from "../actions/index";
import EditorPicks from "../components/EditorPicks";
import NewsWatch from "../components/NewsWatch";
import SectionTitle from "../components/SectionTitle";

function Home(props) {
  useEffect(() => {
    props.getBreakingNews();
    props.getEditorsPicks();
    props.getNewsWatch();
  }, []);

  const { latest, chosenArticles, newsWatch } = props.getNews;
  return (
    <div>
      <TopNews latest={latest} />
      <div className="home-newsbox">
        <div className="left">
          <SectionTitle title="Editor's Picks" />
          <EditorPicks editorPicks={chosenArticles} />
        </div>
        <div className="right">
          <SectionTitle title="Brexit Watch" />
          <NewsWatch newsWatch={newsWatch} />
        </div>
      </div>
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
  getEditorsPicks,
  getNewsWatch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
