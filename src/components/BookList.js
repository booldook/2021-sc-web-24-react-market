import React from 'react';
import styled from 'styled-components'
import { color, media, font } from '../styled'
import parse from 'html-react-parser'

import Title from './list/Title'
import Time from './list/Time'
import Image from './list/Image'
import Content from './list/Content'

const List = styled.div`
	font-family: ${ font.noto };
	border-bottom: 1px solid ${ color.bright };
	padding-bottom: .5em;
	&:nth-child(odd) {
		padding: 1% 3% 1% 1%;
		border-right: 1px solid ${ color.bright };
	}
	&:nth-child(even) {
		padding: 1% 1% 1% 3%;
	}
	width: 47%;
	@media ${ media.lg } {
		width: 97%;
		&:nth-child(odd) {
			border-right: none;
			padding: 3%;
		}
		&:nth-child(even) {
			border-right: none;
			padding: 3%;
		}
	}
`
const Imgs = styled.div`
	padding: .25em;
	border: 1px solid ${ color.primary };
	flex-shrink: 0;
`
const ContentWrap = styled.div`
	margin-bottom: .75em;
	flex-grow: 1;
	padding-left: 1em;
	color: ${ color.dark };
	word-break: break-all;
`

const Titles = styled.a`
	margin-bottom: .5em;
	font-size: 1.25em;
	@media ${ media.sm } {
		font-size: 1em;
	}
`
const Author = styled.div`
	color: ${ color.info };
`
const Price = styled.span`
	font-size: 1em;
	color: ${ color.darker };
`

const Information = styled.div`
	display: flex;
	margin-bottom: .75em;
	font-size: 1rem;
	line-height: 1.25em;
`

const price = (price, salePrice) => {
	return (salePrice > 0) 
		?	`<span style="text-decoration: line-through;">${ price }</span> | <span>${ salePrice }</span>`
		: `<span>${ price }</span>`
}

const BookList = ({ data }) => {
	return (
		<List>
			<Titles href={ data.url } target="_blank">
				<Title value={ data.title } color={ color.primary } />
			</Titles>
			<Information>
				<Imgs>
					<Image thumb={ data.thumbnail } src={ data.url } />
				</Imgs>
				<ContentWrap>
					<Author>{ data.authors.join(', ') }</Author>
					<Price>{ parse(price(data.price, data.sale_price)) }</Price>
					<Time color={ color.grey } value={ data.datetime } size="0.875em" />
				</ContentWrap>
			</Information>
			<Content color={ color.dark } hoverColor={ color.darker } value={ data.contents } />
		</List>
	);
}

export default BookList;
