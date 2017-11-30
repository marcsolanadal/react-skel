import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './initializeStore'

import AssetLoader from './containers/AssetLoader'
import Game from './components/Game'

import './main.css'

render(
  <Provider store={store}>
    <AssetLoader>
      <Game />
    </AssetLoader>
  </Provider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production') {

  // Attaching the store to the global window object to mess with it
  window.store = store 

  // Enables hot module reloading
  if(module.hot) {
    module.hot.accept();
  }
}
