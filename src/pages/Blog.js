import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogData } from '../store/reducers/blogReducer'
import { actQuery } from '../store/reducers/dataReducer'
import { v4 as uuid } from 'uuid'

import styled from 'styled-components'
import { font, color } from '../styled'

import Logo from '../components/Logo'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import BlogList from '../components/BlogList'

const ListWrapper = styled.div`
	margin: 1em 0;
	padding-bottom: 1em;
`
const BlogWrapper = styled(ListWrapper)`
	display: flex;
	flex-wrap : wrap;
`
const Header = styled.header`
	margin-top: 1em;
	display: flex;
`

const Blog = () => {
	const dispatch = useDispatch();
	const query = useSelector(state => state.data.query)
	const blogList = useSelector(state => state.blog.lists)

	useEffect(() => {
		dispatch(getBlogData(query, 50))
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
						<TitleSearch name="Blog" link="/blog" />
						<BlogWrapper>
							{ blogList.map(v => <BlogList data={ v } key={ uuid() }/>) }
						</BlogWrapper>
					</div> : ''
			}
		</div>
	)
}

export default Blog