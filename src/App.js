/**
 ** ********************************************************
 ** @file App.js
 ** @author chentong <chentong@zuzuche.com>
 ** @date 2018-04-25 16:47:40
 ** @last_modified_by chentong <chentong@zuzuche.com>
 ** @last_modified_date 2018-10-12 14:36:21
 ** @copyright (c) 2018 @fe/my-first-react
 ** ********************************************************
 */

import React, { Component } from 'react';
import HelloMessage from './components/helloMessage';
import NotesList from './components/nodesList';
import MyComponent from './components/myComponent';
import MyInput from './components/myInput';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: this.props.store
        };
    }

    updateApp(store) {
        console.log('====== updateApp =======');
        this.setState({
            store: store
        });
    }

    componentDidMount() {
        window.updateApp = this.updateApp.bind(this);
    }

    componentWillUnmount () {
    }

    render() {
        console.log('========== render =========', this.props);
        return (
            <div>
                <h1>Hello World</h1>
                <HelloMessage name="4pmtong" />
                <NotesList>
                    <span>hello</span>
                    <span>world</span>
                </NotesList>
                <MyComponent />
                <MyInput />

                <p>store: {this.state.store.test}</p>
            </div>
        );
    }
}

// const App = () => {
//     console.log('========== render =========');
//     return (
//         <div>
//             <h1>Hello World</h1>
//             <HelloMessage name="4pmtong" />
//             <NotesList>
//                 <span>hello</span>
//                 <span>world</span>
//             </NotesList>
//             <MyComponent />
//             <MyInput />
//         </div>
//     );
// };

// export default App;
