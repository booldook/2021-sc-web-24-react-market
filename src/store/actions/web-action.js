import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchApi } from '../apis'

const getWebAction = createAsyncThunk('web/getWebAction', async (payload, thunk) => {
	try {
		return await getSearchApi(payload, 'WEB_URL')
	}
	catch(err) {
		throw err
	}
})

export { getWebAction }