import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchApi } from '../apis'

const getName = name => {
	switch(name) {
		case 'web':
			return { actionName: 'web/getWebAction', searchEngine: 'WEB_URL' }
		case 'img':
			return { actionName: 'img/getImgAction', searchEngine: 'IMG_URL' }
		case 'clip':
			return { actionName: 'clip/getClipAction', searchEngine: 'CLIP_URL' }
		case 'blog':
			return { actionName: 'blog/getBlogAction', searchEngine: 'BLOG_URL' }
		case 'book':
			return { actionName: 'book/getBookAction', searchEngine: 'BOOK_URL' }
		default:
			throw new Error('매개변수가 올바르지 않습니다.')
	}
}

const getSearchAction = name => {
	return createAsyncThunk(getName(name).actionName, async (payload, thunk) => {
		return getSearchApi(payload, getName(name).searchEngine)
	})
}

export { getSearchAction }