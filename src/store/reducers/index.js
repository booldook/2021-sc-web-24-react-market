import { combineReducers } from 'redux'
import webReducer from './webReducer'

const reducer = combineReducers({
	web: webReducer.reducer
})

export default reducer