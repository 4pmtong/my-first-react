/**
 ** ********************************************************
 ** @file main.js
 ** @author chentong <chentong@zuzuche.com>
 ** @date 2018-04-25 15:56:15
 ** @last_modified_by chentong <chentong@zuzuche.com>
 ** @last_modified_date 2018-04-25 16:52:35
 ** @copyright (c) 2018 @fe/my-first-react
 ** ********************************************************
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('app')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./App', () => render(App));
}
