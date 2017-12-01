import { combineReducers } from 'redux'

import engine from './engine'
import audio from './audio'
import game from './game'

const App = combineReducers({
  engine,
  audio,
  game
})

export default App
