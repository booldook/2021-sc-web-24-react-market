import axios from 'axios'
import { WEB_URL, CLIP_URL, IMG_URL, BLOG_URL, BOOK_URL, genConfig } from '../init'

const getSearchApi = async (query, searchEngine) => {
	try {
		let url = ''
		switch(searchEngine) {
			case 'web':
				url = WEB_URL
				break
			case 'clip':
				url = CLIP_URL
				break
			case 'img':
				url = IMG_URL
				break
			case 'blog':
				url = BLOG_URL
				break
			case 'book':
				url = BOOK_URL
				break
			default:
				throw new Error('매개변수가 잘못되었습니다.')
		}
		const { data } = await axios(url, genConfig(query))
		return {
			pageCnt: data.meta.pageable_count,
			listCnt: data.meta.total_count,
			lists: data.documents
		}
	}
	catch(err) {
		throw err
	}
}

export { getSearchApi }