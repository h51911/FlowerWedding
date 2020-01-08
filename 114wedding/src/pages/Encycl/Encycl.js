import React, { Component } from 'react';
import { Carousel, Row, Col, Tabs } from 'antd';

import '../../css/encycl/encycl.css'
class Encycl extends Component {
    state = {
        datalist: [
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
        ]
    }
    render() {
        let { datalist } = this.state;
        return <>
            <header className="header">
                <Carousel autoplay>
                    {datalist.map((item, index) => (
                        <div>
                            <img src={item.url} alt={item.title} />
                        </div>
                    ))}
                </Carousel>,
        </header>
            <main className="main">
                {/* <section className="nav">
                    <div className="title">婚嫁百科</div>
                    <ul>{list.map((item, index) => (
                        <li>
                            <img src={item.url} />
                            <p>{item.text}</p>
                        </li>
                    ))}
                    </ul>
                </section> */}
            </main>
        </>
    }


}

export default Encycl;
