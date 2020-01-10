import React, { Component } from "react";
import { Spin } from "antd";
import { req } from "../../api";
import DropdownMenu from "./DropdownMenu";
import "../../css/list/List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
            "婚宴酒店",
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
      ],
      kindName: [
        {
          name: "all",
          kind: "all"
        },
        {
          name: "婚纱摄影",
          kind: ["婚纱影楼", "摄影工作室"]
        },
        {
          name: "婚礼策划",
          kind: ["婚礼策划"]
        },
        {
          name: "婚纱礼服",
          kind: ["婚纱礼服"]
        },
        {
          name: "新娘跟妆",
          kind: ["新娘跟妆"]
        },
        {
          name: "婚礼跟拍",
          kind: ["婚礼跟拍"]
        },
        {
          name: "婚礼司仪",
          kind: ["婚礼司仪"]
        },
        {
          name: "婚宴酒店",
          kind: [
            "五星级酒店",
            "特色餐厅",
            "四星级酒店",
            "三星级酒店",
            "主题会所",
            "特色餐厅"
          ]
        },
        {
          name: "儿童摄影",
          kind: ["儿童摄影"]
        }
      ],
      shopList: []
    };

    this.showKindList = this.showKindList.bind(this);
    this.toShop = this.toShop.bind(this);
    this.changeList = this.changeList.bind(this);
  }

  //显示分类列表
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

  //切换列表
  changeList(name) {
    let { kindList, kindKey } = this.state;
    let { kind, addr } = this.props.match.params;

    if (kindKey === 0) {
      kind = name === "不限" ? "all" : name;
    } else if (kindKey === 1) {
      addr = name === "全城" ? "all" : name;
    } else {
      kindList[kindKey].name = name;
    }
    this.setState({
      show: false
    });

    this.props.history.push("/list/" + kind + "/" + addr);
  }

  //跳转详情页
  toShop(gid) {
    this.props.history.push("/details/" + gid);
  }

  //获取列表数据
  // async componentDidMount() {
  //   let { kind, addr } = this.props.match.params;
  //   let list = this.state.kindName.filter(item => {
  //     if (item.name === kind) return item.kind;
  //   });

  //   if (kind !== "all" || addr !== "all") {
  //     let kindList = this.state.kindList;
  //     kindList[0].name = kind === "all" ? "不限" : kind;
  //     kindList[1].name = addr === "all" ? "全城" : addr;
  //     this.setState({
  //       kindList
  //     });
  //   }

  //   let { data } = await req.post("/shops/getList", {
  //     page: 1,
  //     num: 10,
  //     kind: list[0].kind,
  //     area: addr
  //   });

  //   this.setState({
  //     shopList: data.data,
  //     loading: false
  //   });
  // }

  async componentDidUpdate() {
    let { kindList } = this.state;
    let { kind, addr } = this.props.match.params;

    let flag = true;
    switch (true) {
      case kind === "all":
        flag = kindList[0].name !== "不限";
        break;
      case addr === "all":
        flag = kindList[1].name !== "全城";
        break;
      default:
        if (kindList[0].name !== kind || kindList[1].name !== addr) {
          flag = true;
        } else {
          flag = false;
        }
    }

    if (flag) {
      // let { kind, addr } = this.props.match.params;
      let list = this.state.kindName.filter(item => {
        if (item.name === kind) return item.kind;
      });

      if (kind !== "all" || addr !== "all") {
        // let kindList = this.state.kindList;
        kindList[0].name = kind === "all" ? "不限" : kind;
        kindList[1].name = addr === "all" ? "全城" : addr;
        this.setState({
          kindList
        });
      }

      let { data } = await req.post("/shops/getList", {
        page: 1,
        num: 10,
        kind: list[0].kind,
        area: addr
      });

      this.setState({
        shopList: data.data,
        loading: false
      });
    }
  }

  render() {
    let { shopList, kindList, kindKey, show, loading } = this.state;
    return (
      <div className="list-box">
        <ul className="list-drop">
          {kindList.map(item => {
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

        <Spin size="large" spinning={loading} style={{ height: "100%" }}>
          <div className="list-content">
            <div className={show ? "list-mask" : "list-mask hide"}>
              <ul className="kind-list">
                {kindList[kindKey].list.map(item => {
                  return (
                    <li key={item} onClick={this.changeList.bind(null, item)}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            <ul className="shop-list">
              {shopList.map(item => {
                return (
                  <li key={item._id} onClick={this.toShop.bind(null, item._id)}>
                    <div className="shop-img">
                      <img src={item.w_img} alt="商家图片" />
                    </div>

                    <dl className="shop-content">
                      <dt>{item.w_name}</dt>
                      <dd>
                        <span className="shop-rate"></span>
                        <span className="shop-text">{item.w_comment}条</span>
                        <span className="shop-text">
                          系数 {item.w_difficulty}
                        </span>
                      </dd>

                      <dd>
                        <span className="shop-text">{item.w_area}</span>
                        <span className="shop-text">{item.w_kind}</span>
                      </dd>

                      {item.w_infoBox !== "" && (
                        <dd>
                          <img
                            alt="图标"
                            className="gift"
                            src="https://static3.wed114.cn/mobile/images/li.png"
                          />
                          <span className="shop-text">{item.w_infoBox}</span>
                        </dd>
                      )}
                    </dl>
                  </li>
                );
              })}
            </ul>
          </div>
        </Spin>
      </div>
    );
  }
}

export default List;
