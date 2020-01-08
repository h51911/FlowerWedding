import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Row, Icon } from "antd";
import "./App.css";

import Head from "./components/head";
import Home from "./pages/Home/Home";
import Encycl from "./pages/Encycl/Encycl";
import Tools from "./pages/Tools/Tools";
import Mine from "./pages/Mine/Mine";
import List from "./pages/List/List";
import Details from "./pages/List/Details";
import Task from "./pages/Tools/components/task";
import Account from "./pages/Tools/components/account";
import Budget from "./pages/Tools/components/budget";
import Shops from "./pages/Mine/components/shops";
import Order from "./pages/Mine/components/order";
import MyInfo from "./pages/Mine/components/myInfo";
import Login from "./pages/login/login";

import { get_Path } from "./store/actions/common";

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

    this.toLastPage = this.toLastPage.bind(this);
  }

  /*   @切换页面    */
  changMenu = (path, e) => {
    let tar = e.currentTarget.parentElement.getElementsByClassName("active")[0];
    let str = tar.className.replace(/active/, "");
    tar.className = str;
    e.currentTarget.className += " active";
    this.props.history.push(path);
  };

  // 返回上一页
  toLastPage() {
    this.props.history.goBack();
  }

  render() {
    let { menu } = this.state;
    let path = this.props.location.pathname;
    this.props.get_Path(path);

    return (
      <>
        <div className="content">
          {!(path === "/home" || path === "/encycl") && (
            <header>
              <Head toLastPage={this.toLastPage} />
            </header>
          )}
          <main>
            {/* 路由配置 */}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/encycl" component={Encycl} />
              <Route path="/tools" component={Tools} />
              <Route path="/mine" component={Mine} />
              <Route path="/list" component={List} />
              <Redirect from="/" to="/home" exact />
              <Route path="/task" component={Task} />
              <Route path="/budget" component={Budget} />
              <Route path="/account" component={Account} />
              <Route path="/shop" component={Shops} />
              <Route path="/order " component={Order} />
              <Route path="/myInfo" component={MyInfo} />
              <Route path="/login" component={Login} />
              <Route path="/details/:id" component={Details} />
              <Route
                path="/notfound"
                render={() => <h1>你访问的页面不存在</h1>}
              />
              <Redirect to="/notfound" />
            </Switch>
          </main>

          <footer>
            {/* 导航 */}
            {path === "/home" ||
            path === "/encycl" ||
            path === "/tools" ||
            path === "/mine" ? (
              <Row type="flex" justify="space-around">
                {menu.map(item => (
                  <Col
                    className={path === item.path ? "active" : ""}
                    span={4}
                    key={item.name}
                    onClick={this.changMenu.bind(this, item.path)}
                  >
                    <Icon type={item.icon} /> <p> {item.text}</p>
                  </Col>
                ))}
              </Row>
            ) : (
              <></>
            )}
          </footer>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPath: state.common.currentPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_Path(path) {
      dispatch(get_Path(path));
    }
  };
};
// 函数柯里化
App = connect(mapStateToProps, mapDispatchToProps)(App);
// 高阶组件
App = withRouter(App);

export default App;
