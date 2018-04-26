/**
 ** ********************************************************
 ** @file myInput.js
 ** @author chentong <chentong@zuzuche.com>
 ** @date 2018-04-26 11:13:32
 ** @last_modified_by chentong <chentong@zuzuche.com>
 ** @last_modified_date 2018-04-26 11:18:56
 ** @copyright (c) 2018 @fe/my-first-react
 ** ********************************************************
 */

import React from 'react';

export default class MyInput extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            value: 'Hello!'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        let value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <p>{value}</p>
            </div>
        );
    }
};
