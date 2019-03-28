import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BreakingNews from "../components/BreakingNews";
import { getBreakingNews } from '../actions/index';


function Home() {
  return (
    <div>
      <BreakingNews />
    </div>
  );
}

const mapStateToProps = state => {
  const { articles } = state;
  return {
    articles
  };
};

const mapDispatchToProps = {
  getBreakingNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
