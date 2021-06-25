import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchApi } from '../apis'

const getImgAction = createAsyncThunk('img/getImgAction', async (payload, thunk) => {
	try {
		return await getSearchApi(payload, 'IMG_URL')
	}
	catch(err) {
		throw err
	}
})

export { getImgAction }