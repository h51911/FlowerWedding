import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Row, Icon } from "antd";
import "./App.css";

import Home from "./pages/Home/Home";
import Encycl from "./pages/Encycl/Encycl";
import Tools from "./pages/Tools/Tools";
import Mine from "./pages/Mine/Mine";
import List from "./pages/List/List";
import Task from './pages/Tools/components/task';
import Account from './pages/Tools/components/account';
import Budget from './pages/Tools/components/budget';
import Shops from './pages/Mine/components/shops';
import Order from './pages/Mine/components/order';
import MyInfo from './pages/Mine/components/myInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          name: "Home",
          path: "/home",
          text: "首页",
          icon: "home"
        },
        {
          name: "Encycl",
          path: "/encycl",
          text: "百科",
          icon: "book"
        },
        {
          name: "Tools",
          path: "/tools",
          text: "工具",
          icon: "shop"
        },
        {
          name: "Mine",
          path: "/mine",
          text: "我的",
          icon: "user"
        }
      ]
    };
  }

  /*   @切换页面    */
  changMenu = (path, e) => {
    e.target.style.color = "red";
    this.props.history.push(path);
  };

  render() {
    let { menu } = this.state;
    let path = this.props.location.pathname;

    return (
      <>
        {/* 导航 */}
        {(path === '/home' || path === '/encycl' || path === '/tools' || path === '/mine') ?
          <Row type="flex" justify="space-around">
            {menu.map(item => <Col
              span={4}
              key={item.name}
              onClick={this.changMenu.bind(this, item.path)}
            ><Icon type={item.icon} /> <p> {item.text}</p></Col>)}
          </Row> : <></>}

        {/* 路由配置 */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/encycl" component={Encycl} />
          <Route path="/tools" component={Tools} />
          <Route path="/mine" component={Mine} />
          <Route path="/list" component={List} />
          <Redirect from="/" to="/home" exact />
          <Route path='/task' component={Task} />
          <Route path='/budget' component={Budget} />
          <Route path='/account' component={Account} />
          <Route path='/shops' component={Shops} />
          <Route path='/order' component={Order} />
          <Route path='/myinfo' component={MyInfo} />
          <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />
          <Redirect to="/notfound" />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.common.show
  };
};
// 函数柯里化
App = connect(mapStateToProps)(App);
// 高阶组件
App = withRouter(App);

export default App;
