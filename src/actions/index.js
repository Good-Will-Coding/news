import { GET_BREAKINGNEWS, GET_EDITORSPICKS, GET_NEWSWATCH, GET_HEALTHSECTION } from "./constants";
import { NEWS_API_KEY } from "../config";
import axios from "axios";
const API_KEY = NEWS_API_KEY;

export const getBreakingNews = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=3`
      )
      .then(res => {
        dispatch({
          type: GET_BREAKINGNEWS,
          payload: res.data
        }).catch(err => {
          console.log(err);
        });
      });
  };
};

export const getEditorsPicks = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=${API_KEY}&pageSize=10`
      )
      .then(res => {
        dispatch({
          type: GET_EDITORSPICKS,
          payload: res.data
        }).catch(err => {
          console.log(err);
        });
      });
  };
};

export const getNewsWatch = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=brexit&country=gb&apiKey=${API_KEY}&pageSize=14`
      )
      .then(res => {
        dispatch({
          type: GET_NEWSWATCH,
          payload: res.data
        }).catch(err => {
          console.log(err);
        });
      });
  };
};


export const getHealthSection = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API_KEY}&pageSize=8`
      )
      .then(res => {
        dispatch({
          type: GET_HEALTHSECTION,
          payload: res.data
        }).catch(err => {
          console.log(err);
        });
      });
  };
};
