import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import All from './pages/All'
import Web from './pages/Web'
import Img from './pages/Img'
import Clip from './pages/Clip'
import Blog from './pages/Blog'
import Book from './pages/Book'

function App() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/all">
						<All />
					</Route>
					<Route path="/web">
						<Web />
					</Route>
					<Route path="/img">
						<Img />
					</Route>
					<Route path="/clip">
						<Clip />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/book">
						<Book />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
