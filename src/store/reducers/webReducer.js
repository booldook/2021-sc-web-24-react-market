import { createSlice } from '@reduxjs/toolkit'
import { getWebAction } from '../actions/web-action'

const name = 'web'

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
.addCase(getWebAction.pending, (state, { payload }) => {
	state.isQuering = true
})
.addCase(getWebAction.fulfilled, (state, { payload }) => {
	state.isQuering = false
	state.err = null
	state.isEnd = payload.isEnd
	state.pageCnt = payload.pageCnt
	state.listCnt = payload.listCnt
	state.lists = payload.lists
})
.addCase(getWebAction.rejected, (state, { payload }) => {
	state.isQuering = false
	state.err = payload
	state.query = ''
	state.isEnd = false
	state.pageCnt = 0
	state.listCnt = 0
	state.lists = []
})

const webReducers = createSlice({ name, initialState, reducers, extraReducers })

export const getData = (query, cnt = 10, searchEngine = []) => (dispatch, getState) => {
	dispatch(actQuery(query))
	dispatch(getWebAction(query))
}
export const { actQuery } = webReducers.actions
export default webReducers

