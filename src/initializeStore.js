import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers'

import thunk from './middleware/thunk'
import soundPlayer from './middleware/soundPlayer'

const middleware = [
  thunk,
  soundPlayer
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(...middleware))
)

export default store