import React from 'react';
import styled from 'styled-components'

import Search from '../components/Search';

const Logo = styled.h1`
	font-size: 1rem;
	padding: 1.5em;
	text-align: center;
	.img-wrap {
		margin: auto;
		max-width: 100px;
		margin-bottom: 1em;
	}
	.title-wrap {
		font-size: 1.25em;
		color: #444;
	}
`



const Home = () => {
	return (
		<div>
			<Logo>
				<div className="img-wrap">
					<img src="/favicon/apple-icon.png" alt="logo" className="w-100" />
				</div>
				<div className="title-wrap">여러분의 친구 체리 검색</div>
			</Logo>
			<Search />
		</div>
	)
}

export default Home