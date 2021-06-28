import React, { useCallback, useRef } from 'react';
import styled from 'styled-components'
import { color, media } from '../styled'

const Form = styled.div`
	width: 80%;
	max-width: 767px;
	margin: auto;
	@media ${ media.md } {
		width: 94%;
	}
`
const SearchInput = styled.input`
	border-color: ${ color.danger };
	&:focus {
		border-color: ${ color.danger };
		box-shadow: 0 0 0 0.2rem rgb(255 0 123 / 25%);
		outline: 0;
	}
`

const Search = () => {
	const queryRef = useRef('')
	const onQuery = useCallback(e => {
		e.preventDefault()
	}, [])

	return (
		<Form>
			<form onSubmit={ onQuery } className="input-group cherry">
				<SearchInput type="text" rel={ queryRef } className="form-control" name="query" placeholder="검색어를 입력하세요." autoFocus />
				<div className="input-group-append">
					<button className="btn btn-danger">검색</button>
				</div>
			</form>
		</Form>
	);
}

export default Search;
