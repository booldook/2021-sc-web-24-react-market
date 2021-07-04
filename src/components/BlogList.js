import React from 'react';
import styled from 'styled-components'
import { color, media, font } from '../styled'

import Title from './list/Title'
import Time from './list/Time'
import Image from './list/Image'
import Content from './list/Content'

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
const ContentWrap = styled.div`
	margin-bottom: .75em;
	flex-grow: 1;
	padding-left: 1em;
	color: ${ color.dark };
`

const Titles = styled.a`
	margin-bottom: .5em;
	font-size: 1.25em;
	@media ${ media.sm } {
		font-size: 1em;
	}
`
const Author = styled.span`
	color: ${ color.info };
`
const Bar = styled.span`
	padding: 0 .25em;
`
const Url = styled.a`
	color: ${ color.grey };
	&:hover {
		color: ${ color.primary };
	}
`
const Contents = styled.div`
	margin-bottom: .75em;
	font-size: 1rem;
	line-height: 1.25em;
`

const BlogList = ({ data }) => {
	return (
		<List>
			<Imgs>
				<Image thumb={ data.thumbnail } src={ data.url } />
			</Imgs>
			<ContentWrap>
				<Titles href={ data.url } target="_blank">
					<Title value={ data.title } color={ color.primary } />
				</Titles>
				<Contents>
					<Content color={ color.dark } hoverColor={ color.darker } value={ data.contents } />
				</Contents>
				<Author>{ data.blogname }</Author>
				<Bar>|</Bar>
				<Url href={ data.url } target="_blank">{ data.url }</Url>
				<Time color={ color.grey } value={ data.datetime } size="0.875em" />
			</ContentWrap>
		</List>
	);
}

export default React.memo(BlogList)
