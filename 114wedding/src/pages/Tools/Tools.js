import React, { Component } from 'react';
import Head from '../../components/head';
import '../../css/tools/tool.scss'


class Tools extends Component {
    constructor() {
        super();
        this.state = {
            menu: [
                {
                    imgurl: '/img/tools/tools_03.jpg',
                    title: '结婚任务',
                    description: '轻松制定结婚任务',
                    path: '/task',
                    name: 'Task'
                },
                {
                    imgurl: '/img/tools/tools_05.jpg',
                    title: '结婚账本',
                    description: '你的最佳账本',
                    path: '/account',
                    name: 'Account'
                },
                {
                    imgurl: '/img/tools/tools_09.jpg',
                    title: '结婚预算',
                    description: '百万大数据精准预算',
                    path: '/budget',
                    name: 'Budget'
                },
                {
                    imgurl: '/img/tools/tools_10.jpg',
                    title: '结婚吉日',
                    description: '挑选结婚黄道吉日',
                    path: '/day',
                    name: 'Day'
                },
                {
                    imgurl: '/img/tools/tools_13.jpg',
                    title: '结婚登记处',
                    description: '全国婚姻登记查询',
                    path: '/adr',
                    name: 'Adr'
                },
                {
                    imgurl: '/img/tools/tools_14.jpg',
                    title: '我的宾客',
                    description: '安排宾客，规划座位',
                    path: '/guests',
                    name: 'Guests'
                },
                {
                    imgurl: '/img/tools/tools_17.jpg',
                    title: '婚礼墙',
                    description: '百万大数据精准计算',
                    path: '/wall',
                    name: 'Wall'
                },
                {
                    imgurl: '/img/tools/tools_18.jpg',
                    title: '电子请帖',
                    description: '专属你的电子请帖',
                    path: '/invitations',
                    name: 'Invitations'
                }

            ]
        }
        this.changMenu = this.changMenu.bind(this)
    }

    changMenu(path) {
        console.log(this.props);
        this.props.history.push(path)
    }

    render() {
        let { menu } = this.state
        return (
            <>
                <div className='top'></div>
                <div className='cons'>
                    <ul className='conlist'>
                        {
                            menu.map(item => <li className='con'
                                key={item.title}
                                onClick={this.changMenu.bind(null, item.path)}
                            >
                                <img src={item.imgurl} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </li>)
                        }
                    </ul>
                </div>
            </>
        )
    };
}

export default Tools;