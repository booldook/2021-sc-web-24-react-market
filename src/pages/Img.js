import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getImgData } from '../store/reducers/imgReducer'
import { actQuery } from '../store/reducers/dataReducer'
import { v4 as uuid } from 'uuid'

import styled from 'styled-components'
import { font, color } from '../styled'

import Logo from '../components/Logo'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import ImgList from '../components/ImgList'

const ListWrapper = styled.div`
	margin: 1em 0;
	padding-bottom: 1em;
`
const ImgWrapper = styled(ListWrapper)`
	display: flex;
	flex-wrap : wrap;
`
const Header = styled.header`
	margin-top: 1em;
	display: flex;
`

const Img = () => {
	const dispatch = useDispatch();
	const query = useSelector(state => state.data.query)
	const imgList = useSelector(state => state.img.lists)

	useEffect(() => {
		dispatch(getImgData(query, 50))
	}, [dispatch, query]);

	return (
		<div>
			<Header>
				<Logo />
				<Search />
			</Header>
			<NaviBar />
			{
				query !== '' 
				? <div>
						<TitleSearch name="Image" link="/img" />
						<ImgWrapper>
							{ imgList.map(v => <ImgList data={ v } key={ uuid() }/>) }
						</ImgWrapper>
					</div> : ''
			}
		</div>
	)
}

export default Img