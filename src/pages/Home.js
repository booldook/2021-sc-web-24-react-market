import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'

import styled from 'styled-components'
import { font, color } from '../styled'

import TitleBar from '../components/TitleBar'
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
	const query = useSelector(state => state.data.query)
	const webList = useSelector(state => state.web.lists)
	const imgList = useSelector(state => state.img.lists)
	const clipList = useSelector(state => state.clip.lists)
	const blogList = useSelector(state => state.blog.lists)
	const bookList = useSelector(state => state.book.lists)

	return (
		<div>
			<TitleBar />
			<Search />
			<NaviBar />
			{
				query !== '' 
				? <div>
						<TitleSearch name="website" link="/web" />
						<WebWrapper>
							{ webList.map(v => <WebList data={ v } key={ uuid() }/>) }
						</WebWrapper>					
						<TitleSearch name="Image" link="/img" />
						<ImgWrapper>
							{ imgList.map(v => <ImgList data={ v } key={ uuid() }/>) }
						</ImgWrapper>
						<TitleSearch name="Movie clip" link="/clip" />
						<ClipWrapper>
							{ clipList.map(v => <ClipList data={ v } key={ uuid() }/>) }
						</ClipWrapper>
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
		</div>
	)
}

export default Home