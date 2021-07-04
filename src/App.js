import React from 'react';
import styled from 'styled-components'
import { media, size } from './styled';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Web from './pages/Web'
import Img from './pages/Img'
import Clip from './pages/Clip'
import Blog from './pages/Blog'
import Book from './pages/Book'

const Wrapper = styled.div`
	max-width: ${ size.lg };
	padding: 0 1em;
	margin: auto;
`

function App() {
	return (
		<Wrapper>
			<BrowserRouter>
					<Switch>
						<Route exact path="/" component={ Home } />
						<Route exact path="/web" component={ Web } />
						<Route exact path="/img" component={ Img } />
						<Route exact path="/clip" component={ Clip } />
						<Route exact path="/blog" component={ Blog } />
						<Route exact path="/book" component={ Book } />
					</Switch>
			</BrowserRouter>
		</Wrapper>
	);
}

export default App;
