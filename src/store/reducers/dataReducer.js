import { createSlice } from '@reduxjs/toolkit'
import imgReducer from './imgReducer'

const name = 'data'

const initialState = {
	query: '',
}

const reducers = {
	actQuery(state, { payload }) {
		// console.log(imgReducer.actions.reset())
		imgReducer.actions.actReset()
		state.query = payload
	}
}

const dataReducers = createSlice({ name, initialState, reducers })

export const { actQuery } = dataReducers.actions
export default dataReducers

