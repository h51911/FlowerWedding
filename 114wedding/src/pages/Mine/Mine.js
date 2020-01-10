import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/mine/mine.scss';
import { Icon, Badge } from 'antd';
import { sever } from '../../api/index';
// import { login } from '../../store/actions/user';

//将store的数据映射到 UI组件
const mapStateToProps = state => {
    return {
        nikename: state.user.uesrInfo.nikename,
        phone: state.user.uesrInfo.phone,
        weddingdate: state.user.uesrInfo.weddingdate
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}

class Mine extends Component {
    constructor() {
        super();
        this.state = {
            // weddingdate: '',
            dis: '',
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
        this.up_date = this.up_date.bind(this)
    }

    changMenu(path) {
        this.props.history.push(path)
    }
    myInfo = () => {
        // this.props.history.push('/myinfo')
        this.props.phone.length !== 0 ? this.props.history.push("/myinfo") : this.props.history.push('/login');
    }
    up_date({ target }) {
        let dis = parseInt((Date.parse(target.value) - Date.now()) / 1000 / 60 / 60 / 24);
        if (dis <= 0) {
            dis = '...'
        }
    }

    login = () => {
        this.props.history.push('/login');
    }

    render() {
        console.log(this.props);
        let { nikename, login, weddingdate } = this.props
        let { menu, info, dis } = this.state
        return (
            <div className='mine'>
                <div><div className='top_info'>
                    <div className='left' onClick={this.myInfo}>
                        <span className='imgcon'></span>
                        <span className='text'>{nikename.length !== 0 ? nikename : "立即登录"}<Icon type="edit" /></span>
                    </div>
                    <div className='right'>
                        <p className='dis'>
                            <span>距离婚礼还有</span>
                            <span className='days'>{dis.length !== 0 ? dis : ".  .  ."}天</span>
                        </p>
                        <Icon type="right" />
                        <input type="date" className="date"
                            ref={(ele) => this.weddingdate = ele}
                            value={weddingdate}
                            // value={this.state.weddingdate}
                            onChange={this.up_date}
                        />
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

Mine = connect(mapStateToProps, mapDispatchToProps)(Mine);
export default Mine;