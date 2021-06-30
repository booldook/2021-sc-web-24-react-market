import { createSlice } from '@reduxjs/toolkit'

const name = 'data'

const initialState = {
	query: '',
}

const reducers = {
	actQuery(state, { payload }) {
		state.query = payload
	}
}

const dataReducers = createSlice({ name, initialState, reducers })

export const { actQuery } = dataReducers.actions
export default dataReducers

