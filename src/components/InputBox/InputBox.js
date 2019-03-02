import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import './InputBox.css'

class InputBox extends Component {

    render() { 
        return (
        <Input
            dir="rtl"
            placeholder={this.props.placholder}
            suffix={<Icon type={this.props.type} style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        );
    }
}
 
export default InputBox;