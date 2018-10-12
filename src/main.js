/**
 ** ********************************************************
 ** @file main.js
 ** @author chentong <chentong@zuzuche.com>
 ** @date 2018-04-25 15:56:15
 ** @last_modified_by chentong <chentong@zuzuche.com>
 ** @last_modified_date 2018-10-12 14:33:32
 ** @copyright (c) 2018 @fe/my-first-react
 ** ********************************************************
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import App1 from './App1';

let store = {};

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <App store={store}/>
        </AppContainer>,
        document.getElementById('app')
    );
};

render(App);

const render1 = (App) => {
    ReactDOM.render(
        <AppContainer>
            <App store={store}/>
        </AppContainer>,
        document.getElementById('app1')
    );
};

render1(App1);

setTimeout(() => {
    console.log('store change');
    store.test = 1;
    window.updateApp(store);
    window.updateApp1(store);
}, 5000);

if (module.hot) {
    // module.hot.accept('./App', () => render(App));
}
