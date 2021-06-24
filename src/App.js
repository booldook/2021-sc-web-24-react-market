import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWebAction } from './store/actions/web-action'
import webReducer from './store/reducers/webReducer'


function App() {

	const dispatch = useDispatch()
	const { query, isQuering, isEnd, pageCnt, listCnt, lists } = useSelector(state => state)

	const onQuery = useCallback((e) => {
		dispatch(getWebAction('react'))
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
