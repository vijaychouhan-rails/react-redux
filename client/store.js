import { createStore, applyMiddleware, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';


import thunk from 'redux-thunk';
import comments from './data/comments';
import posts from './data/posts';
import { post, fetchPost } from './actions/posts'

// create an object for the default data
const defaultState = {
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

