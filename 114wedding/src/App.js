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
    return (
      <>
        {/* 导航 */}

        <Row type="flex" justify="space-around">
          {menu.map(item => (
            <Col
              span={4}
              key={item.name}
              onClick={this.changMenu.bind(this, item.path)}
            >
              <Icon type={item.icon} /> <p> {item.text}</p>
            </Col>
          ))}
        </Row>

        {/* 路由配置 */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/encycl" component={Encycl} />
          <Route path="/tools" component={Tools} />
          <Route path="/mine" component={Mine} />
          <Route path="/list" component={List} />
          <Redirect from="/" to="/home" exact />
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
