import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import store from './initializeStore'

import './main.css'

store.dispatch({
  type: 'PRELOAD_ASSETS'
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

if(module.hot) {
  module.hot.accept();
}
