import React from 'react';
import styled from 'styled-components'
import moment from 'moment'
import { color } from '../../styled'


const My = styled.div`
	color: ${ props => props.color !== '' ? props.color : color.darker };
	font-size: ${ props => props.size };
	font-weight: 300;
`

const Time = ({ value, size='1em', color='', format=null }) => {
	return (
		<My color={ color } size={ size }>{ moment(value).format(format || 'YYYY-MM-DD HH:mm:ss') }</My>
	);
}

export default React.memo(Time)