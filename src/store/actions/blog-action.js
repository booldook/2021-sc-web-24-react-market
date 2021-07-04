import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchApi } from '../apis'

const getBlogAction = createAsyncThunk('blog/getBlogAction', async (payload, thunk) => {
	try {
		return await getSearchApi(payload, 'BLOG_URL')
	}
	catch(err) {
		throw err
	}
})



export { getBlogAction }