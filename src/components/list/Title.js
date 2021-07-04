import React from 'react';
import styled from 'styled-components'
import parse from 'html-react-parser'
import { color, font } from '../../styled'


const My = styled.div`
	color: ${ props => props.color !== '' ? props.color : color.darker };
	font-size: ${ props => props.size };
`

const Title = ({ value, size='1em', color='' }) => {
	return (
		<My color={ color } size={ size }>{ parse(value) }</My>
	);
}

export default React.memo(Title)
