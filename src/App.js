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
		<div className="wrapper">
			<BrowserRouter>
					<Switch>
						<Route exact path="/" component={ Home } />
						<Route exact path="/all" component={ All } />
						<Route exact path="/web" component={ Web } />
						<Route exact path="/img" component={ Img } />
						<Route exact path="/clip" component={ Clip } />
						<Route exact path="/blog" component={ Blog } />
						<Route exact path="/book" component={ Book } />
					</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
