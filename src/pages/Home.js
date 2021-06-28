import React from 'react';
import styled from 'styled-components'
import { font, color } from '../styled'

import TitleBar from '../components/TitleBar'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'

const Home = () => {
	return (
		<div>
			<TitleBar />
			<Search />
			<NaviBar />
			<TitleSearch name="website" link="/web" />
			<TitleSearch name="Image" link="/img" />
			<TitleSearch name="Movie clip" link="/clip" />
			<TitleSearch name="Blog" link="/blog" />
			<TitleSearch name="Book" link="/book" />
		</div>
	)
}

export default Home