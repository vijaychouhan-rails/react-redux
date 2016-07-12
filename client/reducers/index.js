import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './PostsReducer';

const rootReducer = combineReducers({posts, routing: routerReducer });

export default rootReducer;
