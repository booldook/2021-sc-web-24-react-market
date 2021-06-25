import { createSlice } from '@reduxjs/toolkit'
import { getClipAction } from '../actions/clip-action'

const name = 'clip'

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
.addCase(getClipAction.pending, (state, { payload }) => {
	state.isQuering = true
})
.addCase(getClipAction.fulfilled, (state, { payload }) => {
	state.isQuering = false
	state.err = null
	state.isEnd = payload.isEnd
	state.pageCnt = payload.pageCnt
	state.listCnt = payload.listCnt
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
})

const clipReducers = createSlice({ name, initialState, reducers, extraReducers })

const getClipData = (query, size = 10) => (dispatch, getState) => {
	// dispatch(actQuery(query))
	dispatch(getClipAction({ query, size }))
}

export { getClipAction, getClipData }
export const { actQuery } = clipReducers.actions
export default clipReducers

