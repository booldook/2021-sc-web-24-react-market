import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogData, reset, actIsAdd } from '../store/reducers/blogReducer'
import { v4 as uuid } from 'uuid'
import { InView } from 'react-intersection-observer';

import styled from 'styled-components'

import Logo from '../components/Logo'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import BlogList from '../components/BlogList'

const Wrapper = styled.div`
	padding-bottom: 5em;
`
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
	const [page, setPage] = useState(1)
	
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
		dispatch(getBlogData(query))
	}, [dispatch, query]);
	
	const onChangeView = useCallback((inView, entry) => {
		if(inView && page < 50) {
			dispatch(actIsAdd(true))
			dispatch(getBlogData(query, { page: page + 1 }))
			setPage(page + 1)
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
						<TitleSearch name="Blog" link="/blog" />
						<BlogWrapper>
							{ blogList.map(v => <BlogList data={ v } key={ uuid() }/>) }
						</BlogWrapper>
					</div> : ''
			}
			<InView onChange={ onChangeView }>&nbsp;</InView>
		</Wrapper>
	)
}

export default React.memo(Blog)