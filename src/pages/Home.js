import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid'

import styled from 'styled-components'
import { font, color } from '../styled'

import TitleBar from '../components/TitleBar'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import WebList from '../components/WebList'

const ListWrapper = styled.div`
	margin: 1em 0;
`
const ListWrap = styled.div`
	margin-bottom: 1em;
`

const Home = () => {
	const webList = useSelector(state => state.web.lists)

	return (
		<div>
			<TitleBar />
			<Search />
			<NaviBar />
			<ListWrapper>
				<TitleSearch name="website" link="/web" />
				<ListWrap>
				{
					webList.map(v => <WebList data={ v } key={ uuid() }/>)
				}
				</ListWrap>
			</ListWrapper>
			
			<TitleSearch name="Image" link="/img" />
			<TitleSearch name="Movie clip" link="/clip" />
			<TitleSearch name="Blog" link="/blog" />
			<TitleSearch name="Book" link="/book" />
		</div>
	)
}

export default Home