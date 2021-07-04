import { createSlice } from '@reduxjs/toolkit'
import { getSearchAction } from '../actions/search-action'

const name = 'book'

const getBookAction = getSearchAction(name)

const initialState = {
	query: '',
	isQuering: false,
	err: null,
	isEnd: false,
	pageCnt: 0,
	listCnt: 0,
	lists: [],
	isAdd: false
}

const reducers = {
	reset: () => initialState,
	actIsAdd: (state, { payload }) => {
		state.isAdd = payload
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
	if(state.isAdd)
		state.lists = [...state.lists, ...payload.lists]
	else
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
	state.isAdd = false
})

const bookReducers = createSlice({ name, initialState, reducers, extraReducers })

const getBookData = (query, options = {}) => (dispatch, getState) => {
	let size = options.size || 50
	let page = options.page || 1
	dispatch(getBookAction({ query, size, page }))
}

export { getBookAction, getBookData }
export const { reset, actIsAdd } = bookReducers.actions
export default bookReducers

