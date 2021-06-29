import React from 'react';
import styled from 'styled-components'
import { color, media, font } from '../styled'

import Title from './list/Title'

const List = styled.div`
	margin: 1em 0;
`

const WebList = ({ data }) => {
	return (
		<List>
			<Title size="1.5em" title={ data.title } />
		</List>
	);
}

export default WebList;
