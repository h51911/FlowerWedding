import React, { Component } from "react";
import { Col, Row } from "antd";
import DropdownMenu from "./DropdownMenu";
import "../../css/list/List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      kindKey: 0,
      kindList: [
        {
          key: 0,
          name: "不限",
          list: [
            "不限",
            "婚纱摄影",
            "婚礼策划",
            "婚纱礼服",
            "新娘跟妆",
            "婚礼跟拍",
            "婚礼司仪",
            "订婚宴",
            "儿童摄影"
          ]
        },
        {
          key: 1,
          name: "全城",
          list: [
            "全城",
            "越秀区",
            "荔湾区",
            "海珠区",
            "天河区",
            "白云区",
            "黄埔区",
            "番禺区"
          ]
        },
        {
          key: 2,
          name: "综合排序",
          list: ["综合排序", "保障最好", "作品最多"]
        }
      ]
    };

    this.showKindList = this.showKindList.bind(this);
    this.toShop = this.toShop.bind(this);
  }

  //切换分类列表
  showKindList(key) {
    if (this.state.kindKey === key) {
      let show = !this.state.show;
      this.setState({
        show
      });
    } else {
      this.setState({
        show: true
      });
      let kindKey = key;
      this.setState({
        kindKey
      });
    }
  }

  //跳转详情页
  toShop(gid) {
    console.log(gid);
    this.props.history.push("/details/" + gid);
  }

  render() {
    return (
      <div className="list-box">
        <ul className="list-drop">
          {this.state.kindList.map(item => {
            return (
              <li
                key={item.name}
                onClick={this.showKindList.bind(null, item.key)}
              >
                <DropdownMenu>{item.name}</DropdownMenu>
              </li>
            );
          })}
        </ul>

        <div className="list-content">
          <div className={this.state.show ? "list-mask" : "list-mask hide"}>
            <ul className="kind-list">
              {this.state.kindList[this.state.kindKey].list.map(item => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>

          <ul className="shop-list">
            <li onClick={this.toShop.bind(null, 1)}>
              <div className="shop-img">
                <img src="https://pic11.wed114.cn/pic9/201803/2018032011122734119188x300_300_0.jpg" />
              </div>

              <dl className="shop-content">
                <dt>广州番禺米兰婚纱摄影工作室</dt>
                <dd>
                  <span className="shop-rate"></span>
                  <span className="shop-text">3条</span>
                  <span className="shop-text">系数 0</span>
                </dd>

                <dd>
                  <span className="shop-text">番禺区</span>
                  <span className="shop-text">婚纱影楼</span>
                </dd>

                <dd>
                  <img
                    className="gift"
                    src="https://static3.wed114.cn/mobile/images/li.png"
                  />
                  <span className="shop-text">创意复古鱼杯一套</span>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
