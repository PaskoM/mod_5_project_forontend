import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import * as serviceWorker from './serviceWorker';
import './css/theme.css';
import './css/normalize.css';
// import './css/theme/themelibrary.css';
import './lib/Magnific-Popup-master/dist/magnific-popup.css';
import './lib/fontawesome-free-5.10.2-web/js/brands.js';
import './lib/fontawesome-free-5.10.2-web/js/solid.js';
import "./lib/fontawesome-free-5.10.2-web/js/fontawesome.js";


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
