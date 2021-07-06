import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClipData, reset, actIsAdd } from '../store/reducers/clipReducer'
import { v4 as uuid } from 'uuid'
import { InView } from 'react-intersection-observer';

import styled from 'styled-components'

import Logo from '../components/Logo'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import ClipList from '../components/ClipList'

const Wrapper = styled.div`
	padding-bottom: 5em;
`
const ListWrapper = styled.div`
	margin: 1em 0;
	padding-bottom: 1em;
`
const ClipWrapper = styled(ListWrapper)`
	display: flex;
	flex-wrap : wrap;
`
const Header = styled.header`
	margin-top: 1em;
	display: flex;
`

const Clip = () => {
	const dispatch = useDispatch();
	const query = useSelector(state => state.data.query)
	const listCnt = useSelector(state => state.book.listCnt)
	const clipList = useSelector(state => state.clip.lists)
	const [page, setPage] = useState(1)
	
	useEffect(() => {
		dispatch(reset())
		setPage(1)
		return () => {
			dispatch(reset())
		}
	}, [dispatch])
	
	useEffect(() => {
		dispatch(reset())
		setPage(1)
		dispatch(getClipData(query))
	}, [dispatch, query]);

	const onChangeView = useCallback((inView, entry) => {
		if(inView) {
			if(inView && page < 50 && clipList.length < listCnt) {
				dispatch(actIsAdd(true))
				dispatch(getClipData(query, { page: page + 1 }))
				setPage(page + 1)
			}
		}
	}, [dispatch, page, query])

	return (
		<Wrapper>
			<Header>
				<Logo />
				<Search />
			</Header>
			<NaviBar />
			{
				query !== '' 
				? <div>
						<TitleSearch name="Video clip" link="/clip" />
						<ClipWrapper>
							{ clipList.map(v => <ClipList data={ v } key={ uuid() }/>) }
						</ClipWrapper>
					</div> : ''
			}
			<InView onChange={ onChangeView }>&nbsp;</InView>
		</Wrapper>
	)
}

export default React.memo(Clip)
