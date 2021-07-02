import React, { useCallback } from 'react';
import styled from 'styled-components'
import { color, media, font } from '../styled'

import Title from './list/Title'
import Time from './list/Time'
import Image from './list/Image'

const List = styled.div`
	width: 12.2857%;
	margin: 1%;
	@media ${ media.lg } {
		width: 14.6666%;
	}
	@media ${ media.md } {
		width: 18%;
	}
	@media ${ media.sm } {
		width: 23%;
	}
	@media ${ media.xs } {
		width: 47%;
		margin: 1.5%;
	}
	font-family: ${ font.noto };
`
const Imgs = styled.div`
	
`
const Titles = styled.a`
	margin-bottom: .75em;
	display: flex;
`
const Bar = styled.div`
	padding: 0 .25em;
`
const Collection = styled.div`
	color: ${ color.dark }
`
const Name = styled.div`
	color: ${ color.grey }
`

const ImgList = ({ data, handle }) => {

	const onModalShow = useCallback(() => {
		handle(data.image_url, data.thumbnail_url)
	}, [data.image_url, data.thumbnail_url, handle])

	return (
		<List onClick={ onModalShow }>
			<Imgs>
				<Image src={ data.image_url } thumb={ data.thumbnail_url } isImg={ true } />
			</Imgs>
			<Titles href={ data.doc_url } target="_blank">
				<Collection>{ data.collection }</Collection>
				<Bar>|</Bar>
				<Name>{ data.display_sitename }</Name>
			</Titles>
			<Time color={ color.grey } value={ data.datetime } size="0.875em" />
		</List>
	);
}

export default ImgList;
