/**
 * @fileOverview  Calls for ReactDom to render the home page
 *
 * @author  Fernando Vazquez
 *
 * @requires  NPM: react, react-dom
 * @requires  ./components/home

 */

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Home />, document.getElementById('root'));