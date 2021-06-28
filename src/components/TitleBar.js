import React from 'react';
import styled, { css } from 'styled-components';
import { color, font } from '../styled';

const Logo = styled.h1`
	font-size: 1rem;
	padding: 1.5em;
	text-align: center;
	.img-wrap {
		margin: auto;
		max-width: 180px;
		margin-bottom: 1em;
	}
	.title-wrap {
		font-size: 1.25em;
		color: ${ color.danger };
		font-family: ${ font.noto }; 
	}
`

const TitleBar = () => {
	return (
		<Logo>
			<div className="img-wrap">
				<img src="/logo.png" alt="logo" className="mw-100" />
			</div>
			<div className="title-wrap">여러분의 친구 체리 검색</div>
		</Logo>
	);
}

export default TitleBar;
