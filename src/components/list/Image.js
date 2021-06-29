import React, { useCallback } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { color, font } from '../../styled'


const My = styled.div`
	cursor: pointer;
	overflow: hidden;
	img {
		transition: all .35s;
	}
	&:hover {
		img {
			transform: scale(1.1);
			opacity: .875;
		}
	}
`

const Content = ({ src, thumb }) => {

	const onClick = useCallback(e => {
		// 모달오픈
		// store의 modal: { isModal: true, src: src }
	}, [])

	return (
		<My>
			<img src={ thumb } alt={ src } className="w-100" onClick={ onClick } />
		</My>
	);
}

export default Content