import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchApi } from '../apis'

const getWebAction = createAsyncThunk('web/getWebAction', async (payload, thunk) => {
	try {
		const r = await getSearchApi(payload, 'web')
	}
	catch(err) {
		throw err
	}
})

export default getWebAction