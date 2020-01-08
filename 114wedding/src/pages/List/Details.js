import React, { Component } from "react";
import { Icon } from "antd";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.match.params);
    return (
      <div className="detail-box">
        <div className="detail-img">
          <img src="https://pic11.wed114.cn/pic9/201803/2018032011122734119188x300_300_0.jpg" />
        </div>

        <div className="detail-title detail-pl">
          <h2>广州番禺米兰婚纱摄影工作室</h2>
          <p>
            <span className="shop-rate"></span>
            <span className="shop-text">3条</span>
            <span className="shop-text">系数 0</span>
          </p>
        </div>

        <div className="detail-addr detail-pl">
          <p>
            <Icon
              type="environment"
              theme="filled"
              style={{ fontSize: "0.240741rem", marginRight: "0.231481rem" }}
            />
            新港中路356号丽影广场B区3座1101
          </p>

          <span>
            |
            <Icon
              type="phone"
              theme="filled"
              style={{
                color: "#60c977",
                transform: "rotate(90deg)",
                margin: "0 0.462963rem"
              }}
            />
          </span>
        </div>

        <div className="detail-activity detail-pl">
          <p>
            <img
              className="gift"
              src="https://static3.wed114.cn/mobile/images/li.png"
            />
            创意复古鱼杯一套
          </p>

          <span>&gt;</span>
        </div>

        <dl className="detail-list">
          <dt className="detail-pl">
            <h3>特色案例</h3>
            <p>
              共64个
              <span className="right-arrow">&gt;</span>
            </p>
          </dt>

          <dd className="detail-pl">
            <div className="choose-list">
              <ul>
                <li className="choose-item">
                  <img src="https://pic11.wed114.cn/pic6/20191231/2019123115340831285065x300_300_0.jpg" />
                  <p>
                    <Icon
                      type="picture"
                      theme="filled"
                      style={{ marginRight: "0.092593rem" }}
                    />
                    10
                  </p>
                  <h4>【城际旅行】</h4>
                </li>

                <li className="choose-item">
                  <img src="https://pic11.wed114.cn/pic6/20191231/2019123115261223143415x300_300_0.jpg" />
                  <p>
                    <Icon
                      type="picture"
                      theme="filled"
                      style={{ marginRight: "0.092593rem" }}
                    />
                    9
                  </p>
                  <h4>【法式轻奢】</h4>
                </li>

                <li className="choose-item">
                  <img src="https://pic11.wed114.cn/pic6/20191207/2019120719201684086896x300_300_0.jpg" />
                  <p>
                    <Icon
                      type="picture"
                      theme="filled"
                      style={{ marginRight: "0.092593rem" }}
                    />
                    9
                  </p>
                  <h4>【欧式大牌】</h4>
                </li>

                <li className="choose-item">
                  <img src="https://pic11.wed114.cn/pic6/20191117/2019111718104656987470x300_300_0.jpg" />
                  <p>
                    <Icon
                      type="picture"
                      theme="filled"
                      style={{ marginRight: "0.092593rem" }}
                    />
                    10
                  </p>
                  <h4>【ins森系】</h4>
                </li>

                <li className="choose-item">
                  <img src="https://pic11.wed114.cn/pic6/20191223/2019122313545692549972x300_300_0.jpg" />
                  <p>
                    <Icon
                      type="picture"
                      theme="filled"
                      style={{ marginRight: "0.092593rem" }}
                    />
                    12
                  </p>
                  <h4>【恋人海岸】</h4>
                </li>
              </ul>
            </div>
          </dd>
        </dl>

        <dl className="detail-list">
          <dt className="detail-pl">
            <h3>精选套餐</h3>
            <p>
              共6个
              <span className="right-arrow">&gt;</span>
            </p>
          </dt>

          <dd className="plan-item detail-pl">
            <img src="https://pic11.wed114.cn/pic/20200106/2020010616413772501458x300_200_0.jpg" />

            <div className="plan-content">
              <h4>【总监定制】场景任选+底片全送</h4>
              <p>
                ￥12999
                <del>￥8999</del>
              </p>
              <h5>
                造型:5套
                <span className="divide">|</span>
                拍摄:240张
                <span className="divide">|</span>
                精修:68张
              </h5>
            </div>
          </dd>

          <dd className="plan-item detail-pl">
            <img src="https://pic11.wed114.cn/pic/20200106/2020010616421489617781x300_200_0.jpg" />

            <div className="plan-content">
              <h4>【小众轻奢】+全新研发</h4>
              <p>
                ￥7999
                <del>￥11999</del>
              </p>
              <h5>
                造型:5套
                <span className="divide">|</span>
                拍摄:220张
                <span className="divide">|</span>
                精修:60张
              </h5>
            </div>
          </dd>

          <dd className="plan-item detail-pl">
            <img src="https://pic11.wed114.cn/pic/20191223/2019122317504759264952x300_200_0.jpg" />

            <div className="plan-content">
              <h4>【双基地拍摄】+内景+外景+一价值1888婚纱</h4>
              <p>
                ￥6999
                <del>￥10999</del>
              </p>
              <h5>
                造型:5套
                <span className="divide">|</span>
                拍摄:200张
                <span className="divide">|</span>
                精修:55张
              </h5>
            </div>
          </dd>
        </dl>
      </div>
    );
  }
}

export default Details;
