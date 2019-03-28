import { GET_BREAKINGNEWS } from "../actions/constants";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_BREAKINGNEWS:
      return { ...state, latest: action.payload };
    default:
      return state;
  }
}
