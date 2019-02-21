import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'


class SideMenu extends Component {
     
    createItem(item) {
        if (item.title)
            return (
                <div className='text-right pt-4 pb-4 pr-2' dir='rtl'>
                    <span className='p-2 font-weight-bold'>{item.name}</span>
                </div>
            )
        return (
            <Menu.Item key={item.name} className='text-right' dir='rtl' onClick={() => this.props.onPathUpdate(item)}>
                <Icon type={item.icon} />
                <span className='p-2'>{item.name}</span>
            </Menu.Item> 
        )
    }

    render() { 
        return ( 
            <Menu theme="dark" defaultSelectedKeys={this.props.navigation.items[this.props.navigation.defaultItemIndex].name} mode="inline" >
                {this.props.navigation.items.map((item) => this.createItem(item))}
            </Menu>
         );
    }
}

export default SideMenu;