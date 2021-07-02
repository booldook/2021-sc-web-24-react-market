import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import { font, color } from '../styled'

import { actQuery } from '../store/reducers/dataReducer'
import { getWebData } from '../store/reducers/webReducer'
import { getImgData } from '../store/reducers/imgReducer'
import { getClipData } from '../store/reducers/clipReducer'
import { getBlogData } from '../store/reducers/blogReducer'
import { getBookData } from '../store/reducers/bookReducer'

import TitleBar from '../components/TitleBar'
import Modal from '../components/Modal'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import WebList from '../components/WebList'
import ImgList from '../components/ImgList'
import ClipList from '../components/ClipList'
import BlogList from '../components/BlogList'
import BookList from '../components/BookList'

const ListWrapper = styled.div`
	margin: 1em 0;
	padding-bottom: 1em;
`
const WebWrapper = styled(ListWrapper)``
const ImgWrapper = styled(ListWrapper)`
	display: flex;
	flex-wrap: wrap;
`
const ClipWrapper = styled(ListWrapper)``
const BlogWrapper = styled(ListWrapper)``
const BookWrapper = styled(ListWrapper)`
	display: flex;
	flex-wrap: wrap;
`

const Home = () => {
	const dispatch = useDispatch()
	const query = useSelector(state => state.data.query)
	const webList = useSelector(state => state.web.lists)
	const imgList = useSelector(state => state.img.lists)
	const clipList = useSelector(state => state.clip.lists)
	const blogList = useSelector(state => state.blog.lists)
	const bookList = useSelector(state => state.book.lists)

	const [modal, setModal] = useState(false)
	const [src, setSrc] = useState()
	const [thumb, setThumb] = useState()

	useEffect(() => { // 시작할 때 한번만 실행
		dispatch(actQuery(''))
	}, [dispatch]);

	useEffect(() => {	// Query가 바뀌면 실행
		if(query && query !== '') {
			dispatch(getWebData(query, { size:10 }))
			dispatch(getImgData(query, { size:14 }))
			dispatch(getClipData(query, { size:10 }))
			dispatch(getBlogData(query, { size:10 }))
			dispatch(getBookData(query, { size:10 }))
		}
	}, [dispatch, query]);
	
	const handleModalClose = useCallback(v => {
		setModal(v)
	}, [])

	const handleModalOpen = useCallback((src, thumb) => {
		setSrc(src)
		setThumb(thumb)
		setModal(true)
	}, [])

	return (
		<div>
			<TitleBar />
			<Search />
			<NaviBar />
			{
				query !== '' 
				? <div>
						<TitleSearch name="Image" link="/img" />
						<ImgWrapper>
							{ imgList.map(v => <ImgList data={ v } key={ uuid() } handle={ handleModalOpen }/>) }
						</ImgWrapper>
						<TitleSearch name="Movie clip" link="/clip" />
						<ClipWrapper>
							{ clipList.map(v => <ClipList data={ v } key={ uuid() }/>) }
						</ClipWrapper>
						<TitleSearch name="website" link="/web" />
						<WebWrapper>
							{ webList.map(v => <WebList data={ v } key={ uuid() }/>) }
						</WebWrapper>
						<TitleSearch name="Blog" link="/blog" />
						<BlogWrapper>
							{ blogList.map(v => <BlogList data={ v } key={ uuid() }/>) }
						</BlogWrapper>
						<TitleSearch name="Book" link="/book" />
						<BookWrapper>
							{ bookList.map(v => <BookList data={ v } key={ uuid() }/>) }
						</BookWrapper>
					</div> 
				: ''
			}
			{ modal ? <Modal src={ src } thumb={ thumb } handle={ handleModalClose } /> : '' }
		</div>
	)
}

export default Home