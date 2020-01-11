import React, { Component } from 'react';
import { Carousel, Row, Col, Tabs, Icon, Input } from 'antd';

import Tablist from './Tablist'
import '../../css/encycl/encycl.css'

const { TabPane } = Tabs;
const { Search } = Input;

let position = 5  //判断位置
let opacity = 0
class Encycl extends Component {
    state = {
        datalist1: [
            {
                url: 'https://www.wed114.cn/wiki/static/images/yibu.jpg',
                title: '跨年狂欢！拍婚纱照送全家福！！！'
            },
            {
                url: 'https://www.wed114.cn/wiki/static/images/erbu.jpg',
                title: '广州爱城婚纱摄影天河店'
            },
            {
                url: 'https://www.wed114.cn/wiki/static/images/sanbu.jpg',
                title: '广州田野婚纱摄影工作室'
            },
            {
                url: 'https://www.wed114.cn/wiki/static/images/sibu.jpg',
                title: '广州田野婚纱摄影工作室'
            },
            {
                url: 'https://www.wed114.cn/wiki/static/images/wubu.jpg',
                title: '广州田野婚纱摄影工作室'
            },
            {
                url: 'https://www.wed114.cn/wiki/static/images/liubu.jpg',
                title: '广州田野婚纱摄影工作室'
            }
        ],
        list1: [
            {
                url: 'https://static3.wed114.cn/mobile/v2/img/@2x/Photography@2x.png',
                text: '婚纱摄影'
            },
            {
                url: 'https://static3.wed114.cn/mobile/v2/img/@2x/Plan@2x.png',
                text: '婚礼策划'
            },
            {
                url: 'https://static3.wed114.cn/mobile/v2/img/@2x/dress@2x.png',
                text: '婚纱礼服'
            },
            {
                url: 'https://static3.wed114.cn/mobile/v2/img/@2x/icon_xngz.png',
                text: '新娘跟妆'
            },
            {
                url: 'https://static3.wed114.cn/mobile/v2/img/@2x/icon_hlgp.png',
                text: '婚礼跟拍'
            },
            {
                url: 'https://static3.wed114.cn/mobile/v2/img/@2x/icon_siyi.png',
                text: '婚礼司仪'
            },
            {
                url: 'https://static3.wed114.cn/mobile/v2/img/@2x/icon_dhy.png',
                text: '婚宴酒店'
            },
            {
                url: 'https://static3.wed114.cn/mobile/v2/img/@2x/icon_photokids.png',
                text: '儿童摄影'
            },

        ],
        data: [
            {
                "id": "1",
                "title": "热点百科",
                "datalist1": [{
                    "id": "1",
                    "text1": "#自己生日发朋友圈# ",
                    "text2": "740人觉得有用 ",
                    "text3": "自己生日怎么发朋友圈",
                    "text4": "今天我生日发个朋友圈，但是不知道自己过生日怎么发朋友圈比较好。一起来看看自己过生日到底该送给自己一些什么话。"
                },
                {
                    "id": "2",
                    "text1": "#结婚短信请柬范文#",
                    "text2": "542人觉得有用 ",
                    "text3": "结婚邀请短信范文",
                    "text4": "现在好多年轻的新人都使用短信来告知自己的结婚信息，显得节约成本又很环保，不过也有很多新人都苦恼于短信的内容，这时,结婚邀请短信范文新人就可以多参考了。"
                },
                {
                    "id": "3",
                    "text1": "#情话大全#",
                    "text2": "450人觉得有用 ",
                    "text3": "萌到炸的情话",
                    "text4": "情话总是让人心头暖暖的，这里有简短的萌到炸的情话大全，超可爱萌翻了的超甜的情话集锦，赶紧来看看吧。"
                },
                {
                    "id": "4",
                    "text1": "#情侣网名一-对#",
                    "text2": "440人觉得有用 ",
                    "text3": "网名情侣简单气质",
                    "text4": "网名情侣简单气质的有哪些?下面收集了一些古风简短二字等情侣使用的网名,大家赶紧去看看吧。"
                },
                {
                    "id": "5",
                    "text1": "#情侣昵称大全#",
                    "text2": "403人觉得有用 ",
                    "text3": "情侣之间的调皮称呼",
                    "text4": "情侣之间的调皮称呼，表达着爱意同时也体现了互相间轻松的相处氛围。对于情侣之间的创意爱称，你还知道哪些呢?'下面这些情侣爱称呼叫不俗气好听的，赶紧收藏吧。"
                }
                ]
            },
            {
                "id": "2",
                "title": "热推词条",
                "datalist1": [{
                    "id": "1",
                    "text1": "#自己生日发朋友圈# ",
                    "text2": "740人觉得有用 ",
                    "text3": "自己生日怎么发朋友圈",
                    "text4": "今天我生日发个朋友圈，但是不知道自己过生日怎么发朋友圈比较好。一起来看看自己过生日到底该送给自己一些什么话。"
                },
                {
                    "id": "2",
                    "text1": "#结婚短信请柬范文#",
                    "text2": "542人觉得有用 ",
                    "text3": "结婚邀请短信范文",
                    "text4": "现在好多年轻的新人都使用短信来告知自己的结婚信息，显得节约成本又很环保，不过也有很多新人都苦恼于短信的内容，这时,结婚邀请短信范文新人就可以多参考了。"
                },
                {
                    "id": "3",
                    "text1": "#情话大全#",
                    "text2": "450人觉得有用 ",
                    "text3": "萌到炸的情话",
                    "text4": "情话总是让人心头暖暖的，这里有简短的萌到炸的情话大全，超可爱萌翻了的超甜的情话集锦，赶紧来看看吧。"
                },
                {
                    "id": "4",
                    "text1": "#情侣网名一-对#",
                    "text2": "440人觉得有用 ",
                    "text3": "网名情侣简单气质",
                    "text4": "网名情侣简单气质的有哪些?下面收集了一些古风简短二字等情侣使用的网名,大家赶紧去看看吧。"
                },
                {
                    "id": "5",
                    "text1": "#情侣昵称大全#",
                    "text2": "403人觉得有用 ",
                    "text3": "情侣之间的调皮称呼",
                    "text4": "情侣之间的调皮称呼，表达着爱意同时也体现了互相间轻松的相处氛围。对于情侣之间的创意爱称，你还知道哪些呢?'下面这些情侣爱称呼叫不俗气好听的，赶紧收藏吧。"
                }
                ]
            },
            {
                "id": "3",
                "title": "猜你喜欢",
                "datalist1": [{
                    "id": "1",
                    "text1": "#领证不领空什么意思#",
                    "text2": "0人觉得有用 ",
                    "text3": "领证不领空什么意思",
                    "text4": "每个地方都有些不同的结婚风俗，有些地方还有领证不领空的说法，领证不领空什么意思?登记当天有什么讲究?"
                },
                {
                    "id": "2",
                    "text1": "#嫁女上轿四句#",
                    "text2": "0人觉得有用 ",
                    "text3": "嫁女上轿四句",
                    "text4": "女儿出嫁的时候，父亲会对女儿女婿说些祝福的话语,嫁女上轿四句就是其中之一，此外爸爸对女儿出嫁的嘱托也是比较感人的画面。"
                },
                {
                    "id": "3",
                    "text1": "#儿子结婚爸爸致辞简短#",
                    "text2": "0人觉得有用 ",
                    "text3": "儿子结婚爸爸致辞简短",
                    "text4": "儿子结婚作为父亲当然要上台发言了，为大家整理了儿.子结婚爸爸致辞简短，儿子大婚父亲发言，一起了解下。"
                },
                {
                    "id": "4",
                    "text1": "#婚纱照选片技巧及注意事项# ",
                    "text2": "0人觉得有用 ",
                    "text3": "婚纱照选片技巧及注意事项,",
                    "text4": "婚纱照选片技巧及注意事项有哪些呢?下面我们一起去看看选片的小技巧，在选片时候要对这些事情说不要。婚纱照选片技巧及注意事项,"
                },
                {
                    "id": "5",
                    "text1": "#幽默伴郎致辞#",
                    "text2": "0人觉得有用 ",
                    "text3": "幽默伴郎致辞",
                    "text4": "伴郎一般是由新郎的好哥们担任，有些婚礼免不了会让伴郎发表致辞以表达对好兄弟的美好祝福。那伴郎应该如何幽默简单大方的致辞呢? -起来看看吧。"
                }
                ]
            }
        ]
    }
    onChange(a, b, c) {
        //console.log(a, b, c);
    }
    callback(key) {
        //console.log(key);
    }

    slide(ev) {
        //头部
        let head = document.getElementsByClassName('Helmet')[0]
        if (ev.srcElement.scrollTop > position) {//向下滑动
            if (ev.srcElement.scrollTop > 5 && ev.srcElement.scrollTop < 600) {
                //修改透明度
                opacity = Number(opacity > 1 ? 1 : (opacity + 0.03).toFixed(2));
                head.style.backgroundColor = 'rgba(255, 65, 99, ' + opacity + ')';
            }
            //到达临界值直接不透明
            else if (ev.srcElement.scrollTop > 600) {
                head.style.backgroundColor = 'rgba(255, 65, 99, 1)'
                opacity = 1
            }
        } else {
            if (ev.srcElement.scrollTop > 5 && ev.srcElement.scrollTop < 600) {
                opacity = opacity < 0 ? 0 : Number((opacity - 0.03).toFixed(2))
                head.style.backgroundColor = 'rgba(255, 65, 99, ' + opacity + ')'

            }
            //到达临界值直接透明
            else if (ev.srcElement.scrollTop < 10) {
                head.style.backgroundColor = 'rgba(255, 65, 99, 0)'
                opacity = 0
            }
        }
        //定时器，异步设置当前位置判断值
        setTimeout(() => {
            position = ev.srcElement.scrollTop
        }, 0);
    }

    componentDidMount() {

        document.getElementById('index-page').addEventListener('scroll', this.slide, false
        )
    }

    componentWillUnmount() {

        document.getElementById('index-page').removeEventListener('scroll', this.slide, false
        )
    }

    render() {
        let { datalist1 } = this.state;
        let { list1 } = this.state;

        let { data } = this.state;
        return <div id="index-page">
            <header className="Helmet">
                <div className="search">
                    <Search
                        placeholder="你想知道的婚嫁百科"
                        onSearch={value => console.log(value)}
                        style={{ width: '100%', height: '' }}
                    />

                </div>
            </header>
            <div className="header">
                <Carousel autoplay>
                    {datalist1.map((item, index) => (
                        <div key={index}>
                            <img src={item.url} alt={item.title} />
                        </div>
                    ))}
                </Carousel>,
        </div>
            <div className="main2">
                <section className="nav">
                    <div className="title">婚嫁百科</div>
                    <div className="navigation">
                        <Carousel afterChange={this.onChange}>
                            <div>
                                <ul className="gather">{list1.map((item) => (
                                    <li className="intro" onClick={this.change} key={item.text}>
                                        <img src={item.url} />
                                        <p className="text1">{item.text}</p>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div>
                                <ul className="gather">{list1.map((item) => (
                                    <li className="intro" onClick={this.change} key={item.text}>
                                        <img src={item.url} />
                                        <p className="text1">{item.text}</p>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div>
                                <ul className="gather">{list1.map((item) => (
                                    <li className="intro" onClick={this.change} key={item.text}>
                                        <img src={item.url} />
                                        <p className="text1">{item.text}</p>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </Carousel>
                    </div>

                </section>
                <section className="TabStrip">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        {data.map((item, index) => (
                            <Tabs.TabPane tab={item.title} key={item.id}>
                                {item.datalist1.map((ele, index) => (
                                    <Tablist ele={ele} index={index} key={index + "58"} />
                                ))}

                            </Tabs.TabPane>
                        ))}
                    </Tabs>
                </section>
            </div >

        </div>
    }


}

export default Encycl;
