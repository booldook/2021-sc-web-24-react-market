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
import ImgList from '../components/ImgList'
import ClipList from '../components/ClipList'

const ListWrapper = styled.div`
	margin: 1em 0;
	padding-bottom: 1em;
`
const WebWrapper = styled(ListWrapper)``
const ImgWrapper = styled(ListWrapper)`
	display: flex;
	flex-wrap: wrap;
`
const ClipWrapper = styled(ListWrapper)``


const Home = () => {
	const query = useSelector(state => state.data.query)
	const webList = useSelector(state => state.web.lists)
	const imgList = useSelector(state => state.img.lists)
	const clipList = useSelector(state => state.clip.lists)

	return (
		<div>
			<TitleBar />
			<Search />
			<NaviBar />
			{
				query !== '' 
				? <div>
						<TitleSearch name="website" link="/web" />
						<WebWrapper>
							{ webList.map(v => <WebList data={ v } key={ uuid() }/>) }
						</WebWrapper>					
						<TitleSearch name="Image" link="/img" />
						<ImgWrapper>
							{ imgList.map(v => <ImgList data={ v } key={ uuid() }/>) }
						</ImgWrapper>
						<TitleSearch name="Movie clip" link="/clip" />
						<ClipWrapper>
							{ clipList.map(v => <ClipList data={ v } key={ uuid() }/>) }
						</ClipWrapper>
						<TitleSearch name="Blog" link="/blog" />
						<TitleSearch name="Book" link="/book" />
					</div> 
				: ''
			}
		</div>
	)
}

export default Home