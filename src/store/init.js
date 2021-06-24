const KEY = 'KakaoAK 5f3d3d08e907797ee59674ac803be1d9'
const WEB_URL = 'https://dapi.kakao.com/v2/search/web'
const CLIP_URL = 'https://dapi.kakao.com/v2/search/vclip'
const IMG_URL = 'https://dapi.kakao.com/v2/search/image'
const BLOG_URL = 'https://dapi.kakao.com/v2/search/blog'
const BOOK_URL = 'https://dapi.kakao.com/v3/search/book'

const genConfig = (query) => {
	return {
		params: { query },
		headers: { Authorization: KEY }
	}
}

export { WEB_URL, CLIP_URL, IMG_URL, BLOG_URL, BOOK_URL, genConfig }