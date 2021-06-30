import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components'
import { color, media } from '../styled'
import { useDispatch } from 'react-redux';
import { getWebData } from '../store/reducers/webReducer'
import { getImgData } from '../store/reducers/imgReducer'
import { getClipData } from '../store/reducers/clipReducer'
import { getBlogData } from '../store/reducers/blogReducer'
import { getBookData } from '../store/reducers/bookReducer'
import { actQuery } from '../store/reducers/dataReducer'

const Form = styled.div`
	width: 80%;
	max-width: 767px;
	margin: auto;
	button {
		padding-left: 1.5em;
		padding-right: 1.5em;
	}
	@media ${ media.md } {
		width: 94%;
	}
`
const SearchInput = styled.input`
	border-color: ${ color.danger };
	padding: 1.5em 1.25em;
	&:focus {
		border-color: ${ color.danger };
		box-shadow: 0 0 0 0.2rem rgb(255 0 123 / 25%);
		outline: 0;
	}
`

const Search = () => {
	const dispatch = useDispatch()
	const queryRef = useRef('')
	const [query, setQuery] = useState('')

	const onInputChange = useCallback(e => {
		setQuery(e.target.value)
	}, [])

	const onQuery = useCallback(e => {
		e.preventDefault()
		dispatch(getWebData(query, 10))
		dispatch(getImgData(query, 14))
		dispatch(getClipData(query, 10))
		dispatch(getBlogData(query, 10))
		dispatch(getBookData(query, 10))
		dispatch(actQuery(query))
	}, [dispatch, query])

	return (
		<Form>
			<form onSubmit={ onQuery } className="input-group cherry">
				<SearchInput type="text" rel={ queryRef } className="form-control" name="query" placeholder="검색어를 입력하세요." autoFocus onChange={ onInputChange } value={ query } />
				<div className="input-group-append">
					<button className="btn btn-danger">검색</button>
				</div>
			</form>
		</Form>
	);
}

export default Search;
