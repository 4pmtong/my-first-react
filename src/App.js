/**
 ** ********************************************************
 ** @file App.js
 ** @author chentong <chentong@zuzuche.com>
 ** @date 2018-04-25 16:47:40
 ** @last_modified_by chentong <chentong@zuzuche.com>
 ** @last_modified_date 2018-04-26 11:19:33
 ** @copyright (c) 2018 @fe/my-first-react
 ** ********************************************************
 */

import React from 'react';
import HelloMessage from './components/helloMessage';
import NotesList from './components/nodesList';
import MyComponent from './components/myComponent';
import MyInput from './components/myInput';

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <HelloMessage name="4pmtong"/>
            <NotesList>
                <span>hello</span>
                <span>world</span>
            </NotesList>
            <MyComponent />
            <MyInput />
        </div>
    );
};

export default App;
