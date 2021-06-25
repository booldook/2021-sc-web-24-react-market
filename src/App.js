import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWebAction } from './store/actions/web-action' // 비동기 액션
import { actQuery, getData } from './store/reducers/webReducer' // 동기액션, custom action


function App() {

	const dispatch = useDispatch()
	const { query, isQuering, isEnd, pageCnt, listCnt, lists } = useSelector(state => state) // state

	const onQuery = useCallback((e) => {
		dispatch(getData('react', 10, ['web', 'clip', 'img', 'blog', 'book']))
		// dispatch(getWebAction('react'))
		// dispatch(actQuery('react'))
	}, [dispatch])

	return (
		<div>
			<div>

			</div>
			<button onClick={onQuery}>데이터 가져오기</button>
		</div>
	);
}

export default App;
