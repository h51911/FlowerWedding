import React, { Component } from 'react';
import { HashRouter, Route, Redirect, NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import User from '../components/User';
import Merchant from '../components/Merchant';
import Addmins from '../components/Addmins';

import '../css/home/home.css';

import img1 from '../doc/logo/logo.png';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

var cont = {
    border: '1px solid #ccc',
    marginLeft: '5px',
    padding: '10px 10px'
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            //username: this.props.location.query.username
        };
        //console.log(username);

    }


    componentDidUpdate() {
        let { query } = this.props.location;
        console.log(query);

    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <HashRouter>
                <Layout>
                    <Header className="header">
                        <div className="logo" ><img src={img1} /></div>
                        <div className="logout">退出</div>
                        <div className="title">
                            <p>欢迎<span>{this.state.username}</span>用户登录系统</p>
                        </div>

                    </Header>
                    <Content style={{ padding: '8px 8px', height: '872px' }}>
                        <Breadcrumb style={{ margin: '10px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout style={{ padding: '14px 0' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span><Icon type="user" />用户信息 </span>
                                        }>
                                        <Menu.Item key="1">
                                            <NavLink to='/home/user'>个人用户信息</NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="2">
                                            <NavLink to='/home/merchant'> 商家列表信息</NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="3">
                                            <NavLink to='/home/addmins'>后台用户信息</NavLink>
                                        </Menu.Item>

                                    </SubMenu>

                                </Menu>
                            </Sider>
                            <Content style={cont}>
                                <Route exact path='/home/user' component={User} />
                                <Route exact path='/home/merchant' component={Merchant} />
                                <Route exact path='/home/addmins' component={Addmins} />
                                <Redirect from="/" to="/home/user" exact />
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            </HashRouter>
        )
    }
}

export default Home;