import { combineReducers } from 'redux'

import engine from './engine'
import game from './game'

const App = combineReducers({
  engine,
  game
})

export default App
