import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

function App() {
	return (
		<BrowserRouter>
			<header className="header-wrapper">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</header>
			<div className="wrapper">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
