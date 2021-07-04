import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchApi } from '../apis'

const getWebAction = createAsyncThunk('web/getWebAction', async (payload, thunk) => await getSearchApi(payload, 'WEB_URL')
)

export { getWebAction }