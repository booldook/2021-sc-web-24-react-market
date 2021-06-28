import { combineReducers } from 'redux'
import webReducer from './webReducer'
import imgReducer from './imgReducer'
import clipReducer from './clipReducer'
import blogReducer from './blogReducer'
import bookReducer from './bookReducer'
import queryReducer from './queryReducer'

const reducer = combineReducers({
	web: webReducer.reducer,
	img: imgReducer.reducer,
	clip: clipReducer.reducer,
	blog: blogReducer.reducer,
	book: bookReducer.reducer,
	query: queryReducer.reducer,
})

export default reducer