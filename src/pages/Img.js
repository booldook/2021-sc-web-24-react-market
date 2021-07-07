import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getImgData, reset, actIsAdd } from '../store/reducers/imgReducer'
import { v4 as uuid } from 'uuid'
import { InView } from 'react-intersection-observer';

import styled from 'styled-components'

import Modal from '../components/Modal'
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
	const listCnt = useSelector(state => state.img.listCnt)
	const imgList = useSelector(state => state.img.lists)
	const [page, setPage] = useState(1)
	const [modal, setModal] = useState(false)
	const [src, setSrc] = useState('')
	const [thumb, setThumb] = useState('')
	
	useEffect(() => {
		dispatch(reset())
		setPage(1)
		return () => {
			dispatch(reset())
		}
	}, [dispatch])
	
	useEffect(() => {
		dispatch(reset())
		setPage(1)
		dispatch(getImgData(query))
	}, [dispatch, query]);

	const onChangeView = useCallback((inView, entry) => {
		console.log(imgList.length, listCnt, inView)
		if(inView && page < 50 && imgList.length < listCnt) {
			dispatch(actIsAdd(true))
			dispatch(getImgData(query, { page: page + 1 }))
			setPage(page + 1)
		}
	}, [dispatch, page, query, listCnt, imgList])

	const handleModalClose = useCallback(v => {
		setModal(v)
	}, [])

	const handleModalOpen = useCallback((src, thumb) => {
		setSrc(src)
		setThumb(thumb)
		setModal(true)
	}, [])

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
							{ imgList.map(v => <ImgList data={ v } key={ uuid() } handle={ handleModalOpen }/>) }
						</ImgWrapper>
					</div> : ''
			}
			<InView onChange={onChangeView}>&nbsp;</InView>
			{ modal ? <Modal src={ src } thumb={ thumb } handle={ handleModalClose } /> : '' }
		</Wrapper>
	)
}

export default React.memo(Img)
