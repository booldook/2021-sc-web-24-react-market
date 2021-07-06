import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWebData, reset, actIsAdd } from '../store/reducers/webReducer'
import { v4 as uuid } from 'uuid'
import { InView } from 'react-intersection-observer';

import styled from 'styled-components'

import Logo from '../components/Logo'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import WebList from '../components/WebList'

const Wrapper = styled.div`
	padding-bottom: 5em;
`
const ListWrapper = styled.div`
	margin: 1em 0;
	padding-bottom: 1em;
`
const WebWrapper = styled(ListWrapper)`
	display: flex;
	flex-wrap : wrap;
`
const Header = styled.header`
	margin-top: 1em;
	display: flex;
`

const Web = () => {
	const dispatch = useDispatch();
	const query = useSelector(state => state.data.query)
	const listCnt = useSelector(state => state.book.listCnt)
	const webList = useSelector(state => state.web.lists)
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
		dispatch(getWebData(query))
	}, [dispatch, query]);

	const onChangeView = useCallback((inView, entry) => {
		if(inView && page < 50 && webList.length < listCnt) {
			dispatch(actIsAdd(true))
			dispatch(getWebData(query, { page: page + 1 }))
			setPage(page + 1)
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
						<TitleSearch name="Webpage" link="/web" />
						<WebWrapper>
							{ webList.map(v => <WebList data={ v } key={ uuid() }/>) }
						</WebWrapper>
					</div> : ''
			}
			<InView onChange={ onChangeView }>&nbsp;</InView>
		</Wrapper>
	)
}

export default React.memo(Web)
