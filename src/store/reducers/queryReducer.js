import { createSlice } from '@reduxjs/toolkit'

const name = 'query'

const initialState = {
	query: '',
}

const reducers = {
	actQuery(state, { payload }) {
		state.query = payload
	}
}

const queryReducers = createSlice({ name, initialState, reducers })

export const { actQuery } = queryReducers.actions
export default queryReducers

