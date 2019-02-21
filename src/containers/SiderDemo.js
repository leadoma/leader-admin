import React from 'react';
import 'antd/dist/antd.css';
import './SiderDemo.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Layout, Breadcrumb, Avatar, Icon, Button
} from 'antd';
import SideMenu from '../components/SideMenu.js';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions/index.js';
import nav from '../_nav.js';
import NewTourPage from '../views/tours/NewTourPage';
import TourPrtPage from '../views/tours/TourPrtPage';
import { Route, Redirect } from 'react-router-dom'


const {
  Header, Content, Footer, Sider,
} = Layout;

class SiderDemo extends React.Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

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
      console.log(this.state.item.path)
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Layout>
            <div className="d-flex logo bg-white">
              <Button className="btn-danger pb-1 mr-auto" onClick={this.logout}>
                <a className="text-white">خروج از حساب</a>
              </Button>
              <a dir="rtl" className="pr-2"> {this.props.name} خوش آمدید!</a>
              <Button type="primary pb-1" onClick={this.toggleCollapsed}>
                <Icon type={this.state.collapsed ? 'menu-fold' : 'menu-unfold'} />
              </Button>
            </div>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb className="text-right" style={{ margin: '16px 0'}}>
                <Breadcrumb.Item>{this.state.item.parent}</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.item.name}</Breadcrumb.Item>
              </Breadcrumb>
              <Route exact path={nav.items[1].path} component={NewTourPage} />
              <Route exact path={nav.items[2].path} component={TourPrtPage} />
              <Redirect to={this.state.item.path} />
            </Content>
            <Footer dir='rtl' style={{ textAlign: 'center' }}>
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

const mapStateToProps=(state)=>{
  return state;
}

export default connect(mapStateToProps, actionsCreators)(SiderDemo);