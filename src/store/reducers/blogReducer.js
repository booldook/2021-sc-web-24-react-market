import { createSlice } from '@reduxjs/toolkit'
import { getSearchAction } from '../actions/search-action'

const name = 'blog'

const getBlogAction = getSearchAction(name)

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
.addCase(getBlogAction.pending, (state, { payload }) => {
	state.isQuering = true
})
.addCase(getBlogAction.fulfilled, (state, { payload }) => {
	state.isQuering = false
	state.err = null
	state.isEnd = payload.isEnd
	state.pageCnt = payload.pageCnt
	state.listCnt = payload.listCnt
	state.lists = [...state.lists, ...payload.lists]
})
.addCase(getBlogAction.rejected, (state, { payload }) => {
	state.isQuering = false
	state.err = payload
	state.query = ''
	state.isEnd = false
	state.pageCnt = 0
	state.listCnt = 0
	state.lists = []
})

const blogReducers = createSlice({ name, initialState, reducers, extraReducers })

const getBlogData = (query, options = {}) => (dispatch, getState) => {
	let size = options.size || 50
	let page = options.page || 1
	dispatch(getBlogAction({ query, size, page }))
}

export { getBlogAction, getBlogData }
export const { reset } = blogReducers.actions
export default blogReducers

