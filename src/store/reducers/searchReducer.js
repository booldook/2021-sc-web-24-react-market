import { createSlice } from '@reduxjs/toolkit'

const name = 'search'

const initialState = {
	isQuering: false,
	query: '',
	web: {
		documents: [],
		meta: {}
	},
}

const reducers = {

}

const extraReducers = {

}

const searchReducers = createSlice({ name, initialState, reducers, extraReducers })
export default searchReducers