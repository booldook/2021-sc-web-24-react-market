import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClipData } from '../store/reducers/clipReducer'
import { actQuery } from '../store/reducers/dataReducer'
import { v4 as uuid } from 'uuid'

import styled from 'styled-components'
import { font, color } from '../styled'

import Logo from '../components/Logo'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import ClipList from '../components/ClipList'

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

	useEffect(() => {
		dispatch(getClipData(query, 25))
	}, [dispatch, query]);

	return (
		<div>
			<Header>
				<Logo />
				<Search />
			</Header>
			<NaviBar />
			{
				query !== '' 
				? <div>
						<TitleSearch name="Video Clip" link="/clip" />
						<ClipWrapper>
							{ clipList.map(v => <ClipList data={ v } key={ uuid() }/>) }
						</ClipWrapper>
					</div> : ''
			}
		</div>
	)
}

export default Clip