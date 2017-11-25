import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers'

import thunk from './middleware/thunk'
import logger from './middleware/logger'

const middleware = [
  thunk,
  logger
]

const initialState = {
  todos: []
}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store
