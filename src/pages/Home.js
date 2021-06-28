import React from 'react';
import styled from 'styled-components'
import { font, color } from '../styled'

import TitleBar from '../components/TitleBar'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'

const Home = () => {
	return (
		<div>
			<TitleBar />
			<Search />
			<NaviBar />
		</div>
	)
}

export default Home