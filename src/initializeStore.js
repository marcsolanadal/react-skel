import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers'

import logger from 'redux-logger'
import thunk from './middleware/thunk'
import soundPlayer from './middleware/soundPlayer'

const middleware = [
  logger,
  thunk,
  soundPlayer
]

let composeEnhancers = compose
if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
