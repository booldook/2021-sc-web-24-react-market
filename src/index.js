import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.store';
import { Provider } from 'react-redux';
import store from './store'
import * as serviceWorker from './serviceWorker';

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/base.css'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={ store }>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
