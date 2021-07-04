import React from 'react';
import styled from 'styled-components'
import parse from 'html-react-parser'
import { color, font } from '../../styled'


const My = styled.div`
	color: ${ props => props.color !== '' ? props.color : color.darker };
	&:hover {
		color: ${ props => props.hoverColor !== '' ? props.hoverColor : props.color }
	}
	font-size: ${ props => props.size };
	font-weight: 300;
`

const Content = ({ value, size='1em', color='', hoverColor='' }) => {
	return (
		<My color={ color } size={ size } hoverColor={ hoverColor }>{ parse(value) }</My>
	);
}

export default React.memo(Content)