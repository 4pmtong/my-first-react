/**
 ** ********************************************************
 ** @file nodesList.js
 ** @author chentong <chentong@zuzuche.com>
 ** @date 2018-04-26 10:55:48
 ** @last_modified_by chentong <chentong@zuzuche.com>
 ** @last_modified_date 2018-04-26 10:57:35
 ** @copyright (c) 2018 @fe/my-first-react
 ** ********************************************************
 */

import React from 'react';

export default class NodesList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, child => {
                        return <li>{ child }</li>;
                    })
                }
            </ol>
        );
    }
};
