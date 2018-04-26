/**
 ** ********************************************************
 ** @file helloMessage.js
 ** @author chentong <chentong@zuzuche.com>
 ** @date 2018-04-26 09:55:22
 ** @last_modified_by chentong <chentong@zuzuche.com>
 ** @last_modified_date 2018-04-26 10:34:40
 ** @copyright (c) 2018 @fe/my-first-react
 ** ********************************************************
 */

import React from 'react';

export default class HelloMessage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
};
