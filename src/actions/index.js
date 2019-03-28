import { GET_BREAKINGNEWS } from "./constants";
import { NEWS_API_KEY } from "../config";
import axios from "axios";
const API_KEY = NEWS_API_KEY;

export const getBreakingNews = () => {
  return dispatch => {
    axios
      .get(
        // `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&_order=desc`
        'https://jsonplaceholder.typicode.com/posts'
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
