import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import ReduxProvider from './configureRedux';
import WelcomePage from './Routes/WelcomePage/WelcomePage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/scss/bootstrap.scss';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';
import 'antd/dist/antd.css';

ReactDOM.render(
    <ReduxProvider>
        <Router>
            <Switch>
                <Route path='/' component={WelcomePage} />
            </Switch>
        </Router>
    </ReduxProvider>,
    document.getElementById('root')
);
serviceWorker.unregister();
