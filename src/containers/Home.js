import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BreakingNews from "../components/BreakingNews";
import { getBreakingNews } from "../actions/index";

function Home(props) {

  useEffect(() => {
    props.getBreakingNews();
  }, []);

  return (
    <div>
      <BreakingNews />
    </div>
  );
}

const mapStateToProps = state => {
    console.log(state)
  const { breakingNews } = state;
  return {
    breakingNews
  };
};

const mapDispatchToProps = {
  getBreakingNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
