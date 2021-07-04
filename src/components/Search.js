import React, { useCallback, useRef, useState, useEffect } from 'react';
import styled from 'styled-components'
import { color, media } from '../styled'
import { useDispatch, useSelector } from 'react-redux';
import { actQuery, reset as resetQuery } from '../store/reducers/dataReducer'
import { reset as resetImg } from '../store/reducers/imgReducer'
import { reset as resetClip } from '../store/reducers/clipReducer'
import { reset as resetWeb } from '../store/reducers/webReducer'
import { reset as resetBlog } from '../store/reducers/blogReducer'
import { reset as resetBook } from '../store/reducers/bookReducer'

const Form = styled.div`
	flex-grow: 1;
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
	const oldQuery = useSelector(state => state.data.query)

	const onInputChange = useCallback(e => {
		setQuery(e.target.value)
	}, [])

	useEffect(() => {
		setQuery(oldQuery)
	}, [oldQuery]);

	const onQuery = useCallback(e => {
		e.preventDefault()
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

export default React.memo(Search)
