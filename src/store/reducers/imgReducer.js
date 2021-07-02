import { createSlice } from '@reduxjs/toolkit'
import { getSearchAction } from '../actions/search-action'

const name = 'img'

const getImgAction = getSearchAction(name)

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
.addCase(getImgAction.pending, (state, { payload }) => {
	state.isQuering = true
})
.addCase(getImgAction.fulfilled, (state, { payload }) => {
	state.isQuering = false
	state.err = null
	state.isEnd = payload.isEnd
	state.pageCnt = payload.pageCnt
	state.listCnt = payload.listCnt
	state.lists = [...state.lists, ...payload.lists]
})
.addCase(getImgAction.rejected, (state, { payload }) => {
	state.isQuering = false
	state.err = payload
	state.query = ''
	state.isEnd = false
	state.pageCnt = 0
	state.listCnt = 0
	state.lists = []
})

const ImgReducers = createSlice({ name, initialState, reducers, extraReducers })

const getImgData = (query, options = {}) => (dispatch, getState) => {
	let size = options.size || 80
	let page = options.page || 1
	dispatch(getImgAction({ query, size, page }))
}

export { getImgAction, getImgData }
export const { reset } = ImgReducers.actions
export default ImgReducers

