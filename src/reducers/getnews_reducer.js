import {
  GET_BREAKINGNEWS,
  GET_EDITORSPICKS,
  GET_NEWSWATCH,
  GET_HEALTHSECTION
} from "../actions/constants";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_BREAKINGNEWS:
      return { ...state, latest: action.payload };
    case GET_EDITORSPICKS: {
      return { ...state, chosenArticles: action.payload };
    }
    case GET_NEWSWATCH: {
      return { ...state, newsWatch: action.payload };
    }
    case GET_HEALTHSECTION: {
      return { ...state, healthSection: action.payload };
    }
    default:
      return state;
  }
}
