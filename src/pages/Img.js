import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getImgData } from '../store/reducers/imgReducer'
import { v4 as uuid } from 'uuid'
import { InView } from 'react-intersection-observer';

import styled from 'styled-components'
import { font, color } from '../styled'

import Logo from '../components/Logo'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import ImgList from '../components/ImgList'

const Wrapper = styled.div`
	padding-bottom: 5em;
`
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
	const [page, setPage] = useState(1)

	// const { ref, inView, entry } = useInView({});

	useEffect(() => {
		dispatch(getImgData(query, 50))
	}, [dispatch, query]);

	const onChangeView = useCallback((inView, entry) => {
		if(inView) {
			// console.log('Inview:', inView)
			if(page < 50) {
				dispatch(getImgData(query, 50, page + 1))
				setPage(page + 1)
			}
		}
	}, [dispatch, page, query])

	return (
		<Wrapper>
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
			<InView onChange={onChangeView}>

			</InView>
		</Wrapper>
	)
}

export default Img