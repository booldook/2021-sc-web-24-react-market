import React from 'react';
import styled from 'styled-components'
import { color, font } from '../../styled'

const Title = styled.h3`
	color: ${ props => props.color !== '' ? props.color : color.darker };
	font-size: ${ props => props.size };
	font-family: ${ font.noto }
`

const WebList = ({ title, size='1em', color='' }) => {
	return (
		<Title color={ color } size={ size }>{ title }</Title>
	);
}

export default WebList;
