import { createSlice } from '@reduxjs/toolkit'
import imgReducer from './imgReducer'

const name = 'data'

const initialState = {
	query: '',
}

const reducers = {
	actQuery(state, { payload }) {
		state.query = payload
	},
	reset: () => initialState
}

const dataReducers = createSlice({ name, initialState, reducers })

export const { actQuery, reset } = dataReducers.actions
export default dataReducers

