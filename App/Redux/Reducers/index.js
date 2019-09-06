import { combineReducers } from 'redux'
import cardReducer from './CardReducer'
import searchReducer from './SearchReducer'

export default combineReducers({
  cardReducer,
  searchReducer
})