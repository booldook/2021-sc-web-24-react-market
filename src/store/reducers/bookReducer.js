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
	lists: []
}

const reducers = {
	reset: () => initialState
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
	state.lists = [...state.lists, ...payload.lists]
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

const getBookData = (query, options = {}) => (dispatch, getState) => {
	let size = options.size || 50
	let page = options.page || 1
	dispatch(getBookAction({ query, size, page }))
}

export { getBookAction, getBookData }
export const { reset } = bookReducers.actions
export default bookReducers

