import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Posts from './components/Posts'
import MainApp from './components/App'
import css from './styles/bootstrap.css'
import css1 from './styles/custom.css'


const App = (
  <Provider store={store}>
    <MainApp />
  </Provider>
)

render(App, document.getElementById('root'));
