import React, { Component } from 'react';
import Head from '../../components/head';
import '../../css/mine/mine.scss'
import { Icon, Badge } from 'antd'


class Tools extends Component {
    constructor() {
        super();
        this.state = {
            username: '网友2832687',
            title: '我的',
            info: [
                {
                    imgurl: '/img/mine/mine_05.jpg',
                    title: '意见反馈',
                    num: 0,
                    path: '/suggestion'
                },
                {
                    imgurl: '/img/mine/mine_07.jpg',
                    title: '我的消息',
                    num: 0,
                    path: '/myinfo'
                }
            ],
            menu: [
                {
                    imgurl: '/img/mine/mine_12.jpg',
                    title: '关注商家',
                    num: 0,
                    path: '/shops'
                },
                {
                    imgurl: '/img/mine/mine_15.jpg',
                    title: '我的预约',
                    num: 0,
                    path: '/order'
                },
                {
                    imgurl: '/img/mine/mine_18.jpg',
                    title: '我的点评',
                    num: 0,
                    path: '/comment'
                },
            ]
        }
        this.changMenu = this.changMenu.bind(this)
    }
    changMenu(path) {
        this.props.history.push(path)
    }
    myInfo = () => {
        this.props.history.push('/myinfo')
    }

    render() {
        let { menu, title, info, username } = this.state
        return (
            <div className='mine'>
                <Head title={title} />
                <div><div className='top_info'>
                    <div className='left' onClick={this.myInfo}>
                        <span className='imgcon'></span>
                        <span className='text'>
                            {username} <Icon type="edit" />
                        </span>
                    </div>
                    <div className='right'>
                        <p className='dis'>
                            <span>距离婚礼还有</span>
                            <span className='days'>60 天</span>
                        </p>
                        <Icon type="right" />
                    </div>
                </div>
                    <div className='top_info_bottom'></div>
                </div>

                <div className='icons'>
                    {
                        info.map(item =>
                            <Badge count={item.num} key={item.title}>
                                <div className="icon">
                                    <img src={item.imgurl} alt={item.title} />
                                    <h3>{item.title}</h3>
                                </div>
                            </Badge>)
                    }
                </div>

                <div className='icons two'>
                    {
                        menu.map(item =>
                            <Badge count={item.num} key={item.title}>
                                <div className="icon"
                                    onClick={this.changMenu.bind(this, item.path)}
                                >
                                    <img src={item.imgurl} alt={item.title} />
                                    <h3>{item.title}</h3>
                                </div>
                            </Badge>)
                    }
                </div>
            </div>
        )
    };
}

export default Tools;