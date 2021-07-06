import { createSlice } from '@reduxjs/toolkit'
import { getAction } from '../actions/blog-action'

const name = 'blog'

const getBlogAction = getAction(name)

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
.addCase(getBlogAction.pending, (state, { payload }) => {
	state.isQuering = true
})
.addCase(getBlogAction.fulfilled, (state, { payload }) => {
	state.isQuering = false
	state.err = null
	state.isEnd = payload.isEnd
	state.pageCnt = payload.pageCnt
	state.listCnt = payload.listCnt
	state.lists = payload.lists
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

const getBlogData = (query, size = 10) => (dispatch, getState) => {
	// dispatch(actQuery(query))
	dispatch(getBlogAction({ query, size }))
}

export { getBlogAction, getBlogData }
export const { actQuery } = blogReducers.actions
export default blogReducers

