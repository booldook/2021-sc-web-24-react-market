import React, { useCallback, useRef } from 'react';
import styled from 'styled-components'

const Form = styled.div`
	max-width: 80%;
	margin: auto;
`
const Search = () => {

	const queryRef = useRef('')
	const onQuery = useCallback(e => {
		e.preventDefault()
	}, [])

	return (
		<Form>
			<form onSubmit={ onQuery } className="input-group cherry">
				<input type="text" rel={ queryRef } className="form-control border-danger" name="query" placeholder="검색어를 입력하세요." autoFocus />
				<div className="input-group-append">
					<button className="btn btn-danger">검색</button>
				</div>
			</form>
		</Form>
	);
}

export default Search;
