import React from 'react';
import styled from 'styled-components'
import { color, media, font } from '../styled'

import Title from './list/Title'
import Time from './list/Time'
import Image from './list/Image'

const List = styled.div`
	display: flex;
	align-items: flex-start;
	font-family: ${ font.noto };
	border-bottom: 1px solid ${ color.bright };
	padding-bottom: .5em;
	margin-bottom: 1em;
`
const Imgs = styled.div`
	padding: .25em;
	border: 1px solid ${ color.primary };
	flex-shrink: 0;
`
const Titles = styled.span`
	margin-bottom: .75em;
	flex-grow: 1;
	padding-left: 1em;
	color: ${ color.dark };
	font-size: 1em;
	@media ${ media.sm } {
		font-size: 1em;
	}
`
const Author = styled.span``
const Bar = styled.span`
	padding: 0 .25em;
`
const Url = styled.a`
	color: ${ color.grey };
	display: block;
	&:hover {
		color: ${ color.primary };
	}
`
const Duration = styled.span`

`

const zeroPlus = n => n < 10 ? '0'+n : n

const ClipList = ({ data }) => {
	return (
		<List>
			<Imgs>
				<Image src={ data.url } thumb={ data.thumbnail } />
			</Imgs>
			<Titles>
				<Title value={ data.title } color={ color.primary } size="1.25em" />
				<Author>{ data.author }</Author>
				<Bar>|</Bar>
				<Duration>{ zeroPlus(Math.floor(data.play_time/60)) }:{ zeroPlus(data.play_time%60) }</Duration>
				<Url href={ data.url } target="_blank">{ data.url }</Url>
				<Time color={ color.grey } value={ data.datetime } size="0.875em" />
			</Titles>
		</List>
	);
}

export default React.memo(ClipList)
