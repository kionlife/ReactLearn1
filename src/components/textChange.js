import React, { Component } from 'react';
import Input from './input';
import Text from './text';

class TextApp extends Component {
    state = {
        inputVal: ''
    }

    inputHandler = (e) => {
        this.setState({
            inputVal: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Input copiedText={this.inputHandler} />
                <Text inputText={this.state.inputVal} />
            </div>
        );
    }
}

export default TextApp;