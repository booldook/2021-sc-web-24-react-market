import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWebData } from './store/reducers/webReducer' // 동기액션, custom action
import { getImgData } from './store/reducers/imgReducer' // 동기액션, custom action
import { getClipData } from './store/reducers/clipReducer' // 동기액션, custom action
import { getBlogData } from './store/reducers/blogReducer' // 동기액션, custom action
import { getBookData } from './store/reducers/bookReducer' // 동기액션, custom action


function App() {

	const dispatch = useDispatch() // dispatch((dispatch, getState) => {})
	const { web, img, clip, blog, book } = useSelector(state => state) // state

	const onQueryWeb = useCallback((e) => {
		dispatch(getWebData('react', 30))
		// dispatch(getWebAction('react'))
		// dispatch(actQuery('react'))
	}, [dispatch])

	const onQueryImg = useCallback((e) => {
		dispatch(getImgData('react', 30))
	}, [dispatch])

	const onQueryClip = useCallback((e) => {
		dispatch(getClipData('react', 15))
	}, [dispatch])

	const onQueryBlog = useCallback((e) => {
		dispatch(getBlogData('react', 30))
	}, [dispatch])

	const onQueryBook = useCallback((e) => {
		dispatch(getBookData('react', 30))
	}, [dispatch])

	const onQueryAll = useCallback((e) => {
		dispatch(getWebData('react', 30))
		dispatch(getImgData('react', 30))
		dispatch(getClipData('react', 15))
		dispatch(getBlogData('react', 30))
		dispatch(getBookData('react', 30))
	}, [dispatch])

	return (
		<div>
			<div>

			</div>
			<button onClick={onQueryWeb}>데이터 가져오기-WEB</button>
			<button onClick={onQueryImg}>데이터 가져오기-IMG</button>
			<button onClick={onQueryClip}>데이터 가져오기-CLIP</button>
			<button onClick={onQueryBlog}>데이터 가져오기-BLOG</button>
			<button onClick={onQueryBook}>데이터 가져오기-BOOK</button>
			<button onClick={onQueryAll}>데이터 가져오기-ALL</button>
		</div>
	);
}

export default App;
