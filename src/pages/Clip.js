import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClipData } from '../store/reducers/clipReducer'
import { v4 as uuid } from 'uuid'
import { InView } from 'react-intersection-observer';

import styled from 'styled-components'
import { font, color } from '../styled'

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
	const clipList = useSelector(state => state.clip.lists)
	const [page, setPage] = useState(1)

	useEffect(() => {
		setPage(1)
		console.log(query)
		dispatch(getClipData(query))
	}, [dispatch, query]);

	const onChangeView = useCallback((inView, entry) => {
		if(inView) {
			if(page < 50) {
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
			<InView onChange={onChangeView}>

			</InView>
		</Wrapper>
	)
}

export default Clip