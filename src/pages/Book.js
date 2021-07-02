import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookData } from '../store/reducers/bookReducer'
import { actQuery } from '../store/reducers/dataReducer'
import { v4 as uuid } from 'uuid'

import styled from 'styled-components'
import { font, color } from '../styled'

import Logo from '../components/Logo'
import Search from '../components/Search'
import NaviBar from '../components/NaviBar'
import TitleSearch from '../components/TitleSearch'
import BookList from '../components/BookList'

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

	useEffect(() => {
		dispatch(getBookData(query, 50))
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
						<TitleSearch name="Book" link="/book" />
						<BookWrapper>
							{ bookList.map(v => <BookList data={ v } key={ uuid() }/>) }
						</BookWrapper>
					</div> : ''
			}
		</div>
	)
}

export default Book