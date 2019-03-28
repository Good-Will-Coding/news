import { GET_BREAKINGNEWS, GET_EDITORSPICKS } from "../actions/constants";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_BREAKINGNEWS:
      return { ...state, latest: action.payload };
   case GET_EDITORSPICKS: {
     return { ...state, chosenArticles: action.payload}
   }
      default:
      return state;
  }
}
