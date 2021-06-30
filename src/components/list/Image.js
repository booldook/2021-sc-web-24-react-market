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

const Content = ({ thumb, src, isImg=false }) => {

	const onClick = useCallback(e => {
		if(isImg) {
			// 모달오픈
			// store의 modal: { isModal: true, src: src }
		}
		else window.open(src)
	}, [isImg, src])

	return (
		<My>
			<img src={ thumb } alt={ thumb } className="w-100" onClick={ onClick } />
		</My>
	);
}

export default Content