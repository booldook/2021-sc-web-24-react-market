import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { color, media, font } from '../styled'

const Wrap = styled.div`
	padding: .25em 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Title = styled.h2`
	font-size: 1.25em;
	font-family: ${ font.notoSF };
	color: ${ color.darker };
	margin-right: .75em;
`

const Hr = styled.hr`
	border-color: ${ color.primary };
	flex-grow: 1;
`

const MoreLink = styled(Link)`
	background-color: ${ color.darker };
	color: ${ color.white } !important;
	padding: .125em .5em .25em .5em;
	border-radius: 3px;
	font-size: .75em;
	margin-right: 1em;
`

const TitleSearch = ({ name, link }) => {
	return (
		<Wrap>
			<Title>{ name }</Title>
			<MoreLink to={ link }>more</MoreLink>
			<Hr />
		</Wrap>
	);
}

export default TitleSearch;
