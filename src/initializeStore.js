import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers'

import thunk from './middleware/thunk'
import soundPlayer from './middleware/soundPlayer'
import assetLoader from './middleware/assetLoader'

const middleware = [
  thunk,
  soundPlayer,
  assetLoader
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
