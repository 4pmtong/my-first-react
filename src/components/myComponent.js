/**
 ** ********************************************************
 ** @file myComponent.js
 ** @author chentong <chentong@zuzuche.com>
 ** @date 2018-04-26 11:02:27
 ** @last_modified_by chentong <chentong@zuzuche.com>
 ** @last_modified_date 2018-04-26 11:12:49
 ** @copyright (c) 2018 @fe/my-first-react
 ** ********************************************************
 */

import React from 'react';

export default class NodesList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            liked: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    handleClick() {
        this.refs.myTextInput.focus();
    }

    changeStatus() {
        this.setState({ liked: !this.state.liked });
    }

    render() {
        let text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
                <p onClick={this.changeStatus}>
                    You { text } this. Click to toggle.
                </p>
            </div>
        );
    }
};
