import { combineReducers } from 'redux';
import getNews from './getnews_reducer'

const rootReducer = combineReducers({
    getNews
});

export default rootReducer;