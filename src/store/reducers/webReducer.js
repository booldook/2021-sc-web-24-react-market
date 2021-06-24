import { createSlice } from '@reduxjs/toolkit'

const name = 'search'

const initialState = {
	isQuering: false,
	query: '',
	isEnd: false,
	pageCnt: 0,
	listCnt: 0,
	lists: []
}

const reducers = {
	actQuery(state, { payload }) {
		state.query = payload
	}
}

const extraReducers = builder => builder
.addCase()
.addCase()
.addCase()

const searchReducers = createSlice({ name, initialState, reducers, extraReducers })
export default searchReducers