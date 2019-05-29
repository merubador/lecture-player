import { combineReducers } from 'redux'
import lectures from './lectures'
import player from './player'

const rootReducer = combineReducers({
  lectures,
  player,
})

export default rootReducer
