import React, { Component } from 'react';
import { HashRouter, Route, Redirect, NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Popconfirm, message, Button } from 'antd';

import User from '../components/User';
import Merchant from '../components/Merchant';
import Addmins from '../components/Addmins';
import Appointment from '../components/Appointment';
import Attention from '../components/Attention';

import '../css/home/home.css';

import img1 from '../doc/logo/logo.png';
const text = '确定退出后台管理？';

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
            username: ''
        };
        this.change = this.change.bind(this);
    }


    componentDidMount() {
        setTimeout(() => {
            let username = JSON.parse(localStorage.getItem('username'));
            if (!this.username) {
                //console.log(username);
                this.setState({
                    username
                })
            }
        }, 0);


    }
    componentWillUnmount() {
        localStorage.removeItem('username')
    }

    change() {
        message.success("确认退出")
        this.props.history.push("/login");
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    confirm = () => {
        message.info('退出成功');
        this.props.history.push("/login");
    }

    render() {
        return (
            <HashRouter>
                <Layout>
                    <Header className="header">
                        <div className="logo" ><img src={img1} /></div>
                        <div className="logout">
                            <Popconfirm placement="bottom" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                <Button>退出</Button>
                            </Popconfirm>
                        </div>
                        <div className="title">
                            <p>欢迎&nbsp;<span>{this.state.username}</span>&nbsp;用户登录系统</p>
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
                                        <Menu.Item key="4">
                                            <NavLink to='/home/appointment'>预约用户信息</NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="5">
                                            <NavLink to='/home/attention'>关注商家信息</NavLink>
                                        </Menu.Item>

                                    </SubMenu>

                                </Menu>
                            </Sider>
                            <Content style={cont}>
                                <Route exact path='/home/user' component={User} />
                                <Route exact path='/home/merchant' component={Merchant} />
                                <Route exact path='/home/addmins' component={Addmins} />
                                <Route exact path='/home/appointment' component={Appointment} />
                                <Route exact path='/home/attention' component={Attention} />
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