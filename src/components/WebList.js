import React from 'react';
import styled from 'styled-components'
import { color, media, font } from '../styled'

import Title from './list/Title'
import Content from './list/Content'
import Time from './list/Time'

const List = styled.a`
	margin: 1em 0;
	display: block;
	font-family: ${ font.noto };
`
const Titles = styled.div`
	margin-bottom: .75em;
`
const Contents = styled.div`
	margin-bottom: .75em;
	line-height: 1.25em;
`

const WebList = ({ data }) => {
	return (
		<List href={ data.url } target="_blank">
			<Titles>
				<Title size="1.25em" value={ data.title } />
			</Titles>
			<Contents>
				<Content color={ color.dark } hoverColor={ color.primary } value={ data.contents } />
			</Contents>
			<Time color={ color.grey } value={ data.datetime } size="0.875em" />
		</List>
	);
}

export default React.memo(WebList)
