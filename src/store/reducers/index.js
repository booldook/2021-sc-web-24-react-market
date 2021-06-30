import { combineReducers } from 'redux'
import webReducer from './webReducer'
import imgReducer from './imgReducer'
import clipReducer from './clipReducer'
import blogReducer from './blogReducer'
import bookReducer from './bookReducer'
import dataReducer from './dataReducer'

const reducer = combineReducers({
	web: webReducer.reducer,
	img: imgReducer.reducer,
	clip: clipReducer.reducer,
	blog: blogReducer.reducer,
	book: bookReducer.reducer,
	data: dataReducer.reducer,
})

export default reducer