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
  if(module.hot) {
    module.hot.accept();
  }
}
