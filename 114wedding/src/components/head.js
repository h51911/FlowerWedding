import { connect } from "react-redux";
import React, { Component } from "react";
import { Icon } from "antd";
import "../css/head/head.scss";

let LeftIcon = null; //左边头部图标
let RightIcon = null; //头部主体
let MidComponent = null; //右边头部图标

class Head extends Component {
  state = {
    menu: [
      {
        path: "/login",
        text: "登录"
      },
      {
        path: "/List",
        text: "商家列表"
      },
      {
        path: "/list",
        text: "商家列表"
      },
      {
        path: "/tools",
        text: "免费结婚助手"
      },
      {
        path: "/mine",
        text: "我的"
      },
      {
        path: "/task",
        text: "结婚任务"
      },
      {
        path: "/account",
        text: "结婚账本"
      },
      {
        path: "/budget",
        text: "预算详情"
      }
    ]
  };

  render() {
    let { currentPath } = this.props;
    let name = [];
    name = this.state.menu.filter(item => {
      if (item.path === currentPath) return item;
    });

    //空白
    const empty = () => <span className="empty"></span>;

    //上一页
    const back = () => (
      <Icon className="left" type="left" onClick={this.props.toLastPage} />
    );

    //标题
    const title = () => <p>{name.length ? name[0].text : ""}</p>;

    //更多
    const more = () => <Icon className="right" type="ellipsis" />;

    //分享
    const share = () => <Icon className="right" type="share-alt" />;

    //组件渲染规则
    switch (true) {
      case currentPath === "/login": //登录
      case currentPath === "/tools": //工具
        LeftIcon = empty;
        MidComponent = title;
        RightIcon = empty;
        break;
      case currentPath === "/mine": //我的
        LeftIcon = empty;
        MidComponent = title;
        RightIcon = more;
        break;
      case currentPath.indexOf("/details/") !== -1: //详情
        LeftIcon = back;
        MidComponent = title;
        RightIcon = share;
        break;
      default:
        //默认
        LeftIcon = back;
        MidComponent = title;
        RightIcon = empty;
    }
    return (
      <div className="head">
        <LeftIcon />
        <MidComponent />
        <RightIcon />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPath: state.common.currentPath
  };
};

Head = connect(mapStateToProps)(Head);

export default Head;
