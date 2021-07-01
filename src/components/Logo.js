import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Logo = styled.h1`
	flex-grow: 0;
	max-width: 200px;
`

const TitleBar = () => {
	return (
		<Logo>
			<Link to="/">
				<img src="/logo-sm.png" alt="logo" className="mw-100" />
			</Link>
		</Logo>
	);
}

export default TitleBar;
