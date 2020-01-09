import React, { Component } from 'react';
import { Carousel, Row, Col, Tabs } from 'antd';

import '../../css/home/home.css'
import Tab from './Tabs'
import img1 from '../../doc/home/left.png'
import img2 from '../../doc/home/right.png'

const { TabPane } = Tabs;


class Home extends Component {
    constructor() {
        super();


        this.state = {
            datalist: [
                {
                    id: '1',
                    url: 'https://pic18.wed114.cn/20191216/2019121614162692331407.jpg',
                    title: '跨年狂欢！拍婚纱照送全家福！！！'
                },
                {
                    id: '2',
                    url: 'https://pic18.wed114.cn/20200102/2020010215000639105468.jpg',
                    title: '广州爱城婚纱摄影天河店'
                },
                {
                    id: '3',
                    url: 'https://pic18.wed114.cn/20191223/2019122317584872149360.jpg',
                    title: '广州田野婚纱摄影工作室'
                },
            ],
            list: [
                {
                    id: '1',
                    url: 'https://static3.wed114.cn/mobile/v2/img/@2x/Photography@2x.png',
                    text: '婚纱摄影'
                },
                {
                    id: '2',
                    url: 'https://static3.wed114.cn/mobile/v2/img/@2x/Plan@2x.png',
                    text: '婚礼策划'
                },
                {
                    id: '3',
                    url: 'https://static3.wed114.cn/mobile/v2/img/@2x/dress@2x.png',
                    text: '婚纱礼服'
                },
                {
                    id: '4',
                    url: 'https://static3.wed114.cn/mobile/v2/img/@2x/icon_xngz.png',
                    text: '新娘跟妆'
                },
                {
                    id: '5',
                    url: 'https://static3.wed114.cn/mobile/v2/img/@2x/icon_hlgp.png',
                    text: '婚礼跟拍'
                },
                {
                    id: '6',
                    url: 'https://static3.wed114.cn/mobile/v2/img/@2x/icon_siyi.png',
                    text: '婚礼司仪'
                },
                {
                    id: '7',
                    url: 'https://static3.wed114.cn/mobile/v2/img/@2x/icon_dhy.png',
                    text: '婚宴酒店'
                },
                {
                    id: '8',
                    url: 'https://static3.wed114.cn/mobile/v2/img/@2x/icon_photokids.png',
                    text: '儿童摄影'
                },

            ],
            listvideo: [
                {
                    url: 'https://pic11.wed114.cn/pic10/20190807/2019080710053612861578x600_400_0.jpg',
                    title: '2019下半年新品发布',
                    text: '广州爱城婚纱摄影天河店',
                    num: '12260'
                },
                {
                    url: 'https://pic11.wed114.cn/pic10/20190807/2019080710044565378621x600_400_0.jpg',
                    title: '2019下半年新品发布',
                    text: '广州爱城婚纱摄影天河店',
                    num: '12043'
                },
                {
                    url: 'https://pic11.wed114.cn/pic10/20190807/2019080709590148024012x600_400_0.jpg',
                    title: '2019下半年新品发布',
                    text: '广州爱城婚纱摄影天河店',
                    num: '12546'
                },
                {
                    url: 'https://pic11.wed114.cn/pic10/20190807/2019080709540927716025x600_400_0.jpg',
                    title: '2019下半年新品发布',
                    text: '广州爱城婚纱摄影天河店',
                    num: '12486'
                },
                {
                    url: 'https://pic11.wed114.cn/pic10/20190521/2019052116255429468509x600_400_0.jpg',
                    title: 'Awei高级西服定制',
                    text: 'Awei西服定制',
                    num: '17592'
                },
                {
                    url: 'https://pic11.wed114.cn/pic10/20181126/2018112611153704028117x600_400_0.jpg',
                    title: '爱城摄影 热推场景',
                    text: '广州爱城婚纱摄影天河店',
                    num: '8168'
                },
            ],
            menu: [
                {
                    title: '全部'
                },
                {
                    title: '婚纱摄影'
                },
                {
                    title: '婚礼策划'
                },
                {
                    title: '婚纱礼服'
                },
                {
                    title: '新娘跟妆'
                },
                {
                    title: '婚礼跟拍'
                },
                {
                    title: '婚礼司仪'
                },
                {
                    title: '儿童摄影'
                },
            ],
            kind: ""


            //this.callback = this.callback.bind(this);
        }
        this.change = this.change.bind(this);

        let kind = this.state.list[0].text;


    }

    callback(key) {
        console.log(key);
    }
    change(kind) {
        this.props.history.push('/list/' + kind + '/all')
    }
    render() {
        let { datalist } = this.state;
        let { list } = this.state;
        let { listvideo } = this.state;
        let { menu } = this.state;
        return <>
            <div className="header">
                <Carousel autoplay>
                    {datalist.map((item, index) => (
                        <div key={item.id}>
                            <img src={item.url} alt={item.title} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <main className="main">
                <section className="nav">
                    <ul>{list.map((item, index) => (
                        <li onClick={this.change.bind(null, item.text)} key={item.id} >
                            <img src={item.url} />
                            <p>{item.text}</p>
                        </li>
                    ))}
                    </ul>
                </section>
                <section className="simNav hotTravel">
                    <div className="title">
                        <p>全球旅拍</p>
                        <span>更多目的地 ></span>
                    </div>
                    <div className="imgBox">
                        <div className="left">
                            <img src={img1} alt="" />
                        </div>
                        <div className="right">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <ul className="clearfix">
                        <li>三亚</li>
                        <li>大理</li>
                        <li>厦门</li>
                        <li>丽江</li>
                        <li>大连</li>
                        <li>青岛</li>
                        <li>吉普岛</li>
                        <li>更多 ></li>
                    </ul>
                </section>
                <section className="simNav tools">
                    <div className="title">
                        <p>工具</p>
                        <span>更多 ></span>
                    </div>
                    <ul>
                        <li>
                            <img src="https://static3.wed114.cn/mobile/v2/img/@2x/qingjian@2x.png" alt="" />
                            <p>电子请帖</p>
                        </li>
                        <li>
                            <img src="https://static3.wed114.cn/mobile/v2/img/@2x/icon_tools_wall.png" alt="" />
                            <p>现场婚礼墙</p>
                        </li>
                        <li>
                            <img src="https://static3.wed114.cn/mobile/v2/img/@2x/jiri@2x.png" alt="" />
                            <p>结婚吉日</p>
                        </li>
                        <li>
                            <img src="https://static3.wed114.cn/mobile/v2/img/@2x/dengjichu@2x.png" alt="" />
                            <p>婚姻登记处</p>
                        </li>
                    </ul>
                </section>
                <section className="simNav video">
                    <div className="title">
                        <p>花絮</p>
                    </div>
                    <div className="itemBox">
                        <div className="Box">
                            {listvideo.map((item, index) => (
                                <div className="wrapper" key={item.num}>
                                    <div className="itemVideo">
                                        <img src={item.url} />
                                    </div>
                                    <div className="itemText">
                                        <div className="txt1">{item.title}</div>
                                        <div className="txt2">
                                            <p>{item.text}</p>
                                            <img src="https://static3.wed114.cn/mobile/v2/img/@2x/new_heart.png" alt="" />
                                            <p>{item.num}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
                <section className="works">
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition='top'
                        onChange={this.callback}>
                        {menu.map((item, index) => (
                            <Tabs.TabPane tab={item.title} key={index}>
                                <Tab />
                            </Tabs.TabPane>
                        ))}
                    </Tabs>
                </section>

                <section>
                    <button onClick={() => {
                        this.props.history.push('/login')
                    }}>登录</button>
                </section>
            </main>
        </>
    }
}
export default Home;