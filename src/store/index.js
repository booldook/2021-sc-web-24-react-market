import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './reducers'

const store = configureStore({
	reducer,
	middleware: [...getDefaultMiddleware()]
})

export default store