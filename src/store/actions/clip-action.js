import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchApi } from '../apis'

const getClipAction = createAsyncThunk('clip/getClipAction', async (payload, thunk) => {
	try {
		return await getSearchApi(payload, 'CLIP_URL')
	}
	catch(err) {
		throw err
	}
})

export { getClipAction }