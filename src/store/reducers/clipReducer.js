import { createSlice } from '@reduxjs/toolkit'
import { getSearchAction } from '../actions/search-action'

const name = 'clip'

const getClipAction = getSearchAction(name)

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
.addCase(getClipAction.pending, (state, { payload }) => {
	state.isQuering = true
})
.addCase(getClipAction.fulfilled, (state, { payload }) => {
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
.addCase(getClipAction.rejected, (state, { payload }) => {
	state.isQuering = false
	state.err = payload
	state.query = ''
	state.isEnd = false
	state.pageCnt = 0
	state.listCnt = 0
	state.lists = []
	state.isAdd = false
})

const clipReducers = createSlice({ name, initialState, reducers, extraReducers })

const getClipData = (query, options = {}) => (dispatch, getState) => {
	let size = options.size || 15
	let page = options.page || 1
	dispatch(getClipAction({ query, size, page }))
}

export { getClipAction, getClipData }
export const { reset, actIsAdd } = clipReducers.actions
export default clipReducers

