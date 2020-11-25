import { combineReducers } from 'redux'

import message from './component/bot/reducer'

const reducers = {
  message,
}

export default combineReducers(reducers)
