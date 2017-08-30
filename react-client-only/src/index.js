import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import App from './App';
import Routes from './app/routes';

import './app/styles/bootstrap-min.css';
import './app/styles/override.css';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Routes.index },
  childRoutes: Routes.childRoutes
}

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
