/**
 ** ********************************************************
 ** @file App1.js
 ** @author chentong <chentong@zuzuche.com>
 ** @date 2018-10-12 14:27:27
 ** @last_modified_by chentong <chentong@zuzuche.com>
 ** @last_modified_date 2018-10-12 14:36:24
 ** @copyright (c) 2018 @fe/my-first-react
 ** ********************************************************
 */

import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: this.props.store
        };
    }

    updateApp(store) {
        console.log('====== updateApp1 =======');
        this.setState({
            store: store
        });
    }

    componentDidMount() {
        window.updateApp1 = this.updateApp.bind(this);
    }

    render() {
        console.log('========== render app1 =========', this.props);
        return (
            <div>
                <h1>Hello World</h1>

                <p>store: {this.state.store.test}</p>
            </div>
        );
    }
}
