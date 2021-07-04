import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookData, reset, actIsAdd } from '../store/reducers/bookReducer'
import { v4 as uuid } from 'uuid'
import { InView } from 'react-intersection-observer';

import styled from 'styled-components'


import Logo from '../components/Logo'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import BookList from '../components/BookList'

const Wrapper = styled.div`
	padding-bottom: 5em;
`
const ListWrapper = styled.div`
	margin: 1em 0;
	padding-bottom: 1em;
`
const BookWrapper = styled(ListWrapper)`
	display: flex;
	flex-wrap : wrap;
`
const Header = styled.header`
	margin-top: 1em;
	display: flex;
`

const Book = () => {
	const dispatch = useDispatch();
	const query = useSelector(state => state.data.query)
	const bookList = useSelector(state => state.book.lists)
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
		dispatch(getBookData(query))
	}, [dispatch, query]);
	
	const onChangeView = useCallback((inView, entry) => {
		if(inView && page < 50) {
			dispatch(actIsAdd(true))
			dispatch(getBookData(query, { page: page + 1 }))
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
						<TitleSearch name="Book" link="/book" />
						<BookWrapper>
							{ bookList.map(v => <BookList data={ v } key={ uuid() }/>) }
						</BookWrapper>
					</div> : ''
			}
			<InView onChange={onChangeView}>

			</InView>
		</Wrapper>
	)
}

export default React.memo(Book)