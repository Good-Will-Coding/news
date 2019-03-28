import { GET_BREAKINGNEWS, GET_EDITORSPICKS } from "./constants";
import { NEWS_API_KEY } from "../config";
import axios from "axios";
const API_KEY = NEWS_API_KEY;

export const getBreakingNews = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}&pageSize=5`
      )
      .then(res => {
        dispatch({
          type: GET_BREAKINGNEWS,
          payload: res.data
        })
        .catch(err => {
            console.log(err)
        })
      });
  };
};

export const getEditorsPicks = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tech&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=30`
      )
      .then(res => {
        dispatch({
          type: GET_EDITORSPICKS,
          payload: res.data
        })
        .catch(err => {
            console.log(err)
        })
      });
  };

}
