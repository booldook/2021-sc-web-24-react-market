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

const ListWrapper = styled.div`
	margin: 1em 0;
	padding-bottom: 1em;
`
const WebWrapper = styled(ListWrapper)``
const ImgWrapper = styled(ListWrapper)`
	display: flex;
	flex-wrap: wrap;
`


const Home = () => {
	const webList = useSelector(state => state.web.lists)
	const imgList = useSelector(state => state.img.lists)

	return (
		<div>
			<TitleBar />
			<Search />
			<NaviBar />
			<TitleSearch name="website" link="/web" />
			<WebWrapper>
				{ webList.map(v => <WebList data={ v } key={ uuid() }/>) }
			</WebWrapper>
			
			<TitleSearch name="Image" link="/img" />
			<ImgWrapper>
				{ imgList.map(v => <ImgList data={ v } key={ uuid() }/>) }
			</ImgWrapper>

			<TitleSearch name="Movie clip" link="/clip" />
			<TitleSearch name="Blog" link="/blog" />
			<TitleSearch name="Book" link="/book" />
		</div>
	)
}

export default Home