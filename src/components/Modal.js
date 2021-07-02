import React, { useCallback } from 'react';
import styled from 'styled-components'
import { color, media, font } from '../styled'

const My = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, .8);
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`
const Body = styled.div`
	
`

const CloseButton = styled.div`
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2em;
	color: #fff;
	background-color: ${ color.primary };
	position: absolute;
	right: 0;
	top: 0;
	cursor: pointer;
`

const Modal = ({ src, thumb, handle }) => {

	const onClose = useCallback(e => {
		handle(false)
	}, [handle])

	const onImgError = useCallback(e => {
		e.target.src = thumb
	}, [thumb])

	return (
		<My>
			<Body>
				<img src={ src } className="mw-100 mh-100" alt={ src } onError={ onImgError } />
			</Body>
			<CloseButton onClick={ onClose }>
				<i className="fa fa-times"></i>
			</CloseButton>
		</My>
	);
}

export default Modal;
