import React from 'react';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Layout, Breadcrumb, Avatar, Icon, Button, Dropdown, Menu
} from 'antd';
import SideMenu from '../components/SideMenu.js';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions/index.js';
import nav from '../_nav.js';
import NewTourPage from '../views/tours/NewTourPage';
import CreateTourPage from '../views/tours/CreateTourPage'
import TourPrtPage from '../views/tours/TourPrtPage'
import { Route, Redirect } from 'react-router-dom'


const {
  Header, Content, Footer, Sider,
} = Layout;

class SiderDemo extends React.Component {

  state = {
      collapsed: false,
      item: nav.items[nav.defaultItemIndex]
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  logout = () => {
    this.props.logout();
  }
  
  componentDidMount() {
    this.props.loadProfile();
  }

  pathDirection = (item) => {
    this.setState({
      item: item
    });
  }

  render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Layout>
            <div className="d-flex bg-white p-3">
              <Dropdown overlay={menu} placement="bottomRight">
                <Avatar className="" size={32} icon="user" />
              </Dropdown>
              <a className="btn-light mr-auto p-2 badge ml-2">پشتیبانی  ۶۶۸۹۵۹۶-۰۲۱</a>
              <Breadcrumb className="text-right font-weight-bold pr-2 pt-1">
                <Breadcrumb.Item>{this.state.item.parent}</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.item.name}</Breadcrumb.Item>
              </Breadcrumb>
              <Button type="primary pb-1" onClick={this.toggleCollapsed}>
                <Icon type={this.state.collapsed ? 'menu-fold' : 'menu-unfold'} />
              </Button>
            </div>
            <Content style={{ margin: '0 16px' }}>
              <Route exact path='/tours/create' component={CreateTourPage} />
              <Route path={nav.items[1].path} component={NewTourPage} />
              <Route path={nav.items[2].path} component={TourPrtPage} />
              {/* <Redirect to={this.state.item.path} /> */}
            </Content>
            <Footer dir='rtl' className="text-secondary" style={{ textAlign: 'center' }}>
              حقوق مادی و معنوی متعلق به لیدوما می‌باشد.
            </Footer>
          </Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}>
            <div className='text-center pt-5 pb-3'>
              <Avatar size={100} shape="square" icon="user" src={this.props.image_indicator}/>
            </div>
            <SideMenu onPathUpdate={this.pathDirection} navigation={nav}/>
          </Sider>
        </Layout>
      );
  }
}

const menu = (
  <Menu>
    <Menu.Item>
      <a>خروج از حساب</a>
    </Menu.Item>
  </Menu>
);

const mapStateToProps=(state)=>{
  return state;
}

export default connect(mapStateToProps, actionsCreators)(SiderDemo);