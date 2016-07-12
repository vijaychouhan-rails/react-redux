import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Login from './components/Login';
import ShowPost from './components/ShowPost';
import Posts from './components/Posts';
import css from './styles/bootstrap.css';
import css1 from './styles/custom.css';


// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Posts}></IndexRoute>
        <Route path="/login" component={Login}></Route>
        <Route path="/post/:id" component={ShowPost}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
