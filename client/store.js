import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PostsReducer from './reducers/PostsReducer';
import comments from './data/comments';
import posts from './data/posts';
import { post, fetchPost } from './actions/posts'

// create an object for the default data
const defaultState = {
};


const store = createStore(PostsReducer, defaultState, applyMiddleware(thunk))
//console.log('get state');
//console.log(store.getState());
export default store
