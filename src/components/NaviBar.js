import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color, font, media } from '../styled'

const NaviWrap = styled.div`

`

const NaviBar = () => {
	return (
		<NaviWrap>
			<Link to='/web'>Website</Link>
			<Link to='/img'>Image</Link>
			<Link to='/clip'>Movie clip</Link>
			<Link to='/blog'>Blog</Link>
			<Link to='/book'>Book</Link>
		</NaviWrap>
	);
}

export default NaviBar;
