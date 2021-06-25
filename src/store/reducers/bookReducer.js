import { createSlice } from '@reduxjs/toolkit'
import { getBookAction } from '../actions/book-action'

const name = 'book'

const initialState = {
	query: '',
	isQuering: false,
	err: null,
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
.addCase(getBookAction.pending, (state, { payload }) => {
	state.isQuering = true
})
.addCase(getBookAction.fulfilled, (state, { payload }) => {
	state.isQuering = false
	state.err = null
	state.isEnd = payload.isEnd
	state.pageCnt = payload.pageCnt
	state.listCnt = payload.listCnt
	state.lists = payload.lists
})
.addCase(getBookAction.rejected, (state, { payload }) => {
	state.isQuering = false
	state.err = payload
	state.query = ''
	state.isEnd = false
	state.pageCnt = 0
	state.listCnt = 0
	state.lists = []
})

const bookReducers = createSlice({ name, initialState, reducers, extraReducers })

const getBookData = (query, size = 10) => (dispatch, getState) => {
	// dispatch(actQuery(query))
	dispatch(getBookAction({ query, size }))
}

export { getBookAction, getBookData }
export const { actQuery } = bookReducers.actions
export default bookReducers

