import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/mine/mine.scss';
import { Icon, Badge } from 'antd';
import Tab from "../Home/Tabs";
import { sever } from '../../api/index';
import { up_d } from "../../store/actions/user";
import { myorder } from "../../store/actions/user"


//将store的数据映射到 UI组件
const mapStateToProps = state => {
    return {
        info: state.user.uesrInfo,
        nikename: state.user.uesrInfo.nikename,
        phone: state.user.uesrInfo.phone,
        weddingdate: state.user.uesrInfo.weddingdate
    }
}

class Mine extends Component {
    constructor() {
        super();
        this.state = {
            dis: '...',
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
                    path: '/shop'
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
            ],
            data: []
        }
        this.changMenu = this.changMenu.bind(this)
        this.up_date = this.up_date.bind(this)
    }

    initDate(weddingdate) {
        let dis = parseInt((Date.parse(weddingdate) - Date.now()) / 1000 / 60 / 60 / 24);
        if (dis <= 0) {
            dis = '...'
        }
        this.setState({ dis })
    }

    async componentDidMount() {
        this.initDate(this.props.weddingdate);
        let res = await sever.get('/data/');
        this.setState({ data: res });
        let myorders = await sever.get('collection/orders', { phone: this.props.phone });
        let myshops = await sever.get('collection/shops', { phone: this.props.phone })
        this.props.dispatch(myorder(myorders.data, myshops.data));
    }

    changMenu(path) {
        this.props.history.push(path)
    }

    myInfo = () => {
        this.props.phone.length !== 0 ? this.props.history.push("/myinfo") : this.props.history.push('/login');
    }

    up_date({ target }) {
        this.initDate(target.value);
        this.props.dispatch(up_d(target.value));
        this.props.dispatch({
            type: 'UP_INFO_ASYNC',
            payload: this.props.info
        });
    }

    login = () => {
        this.props.history.push('/login');
    }

    render() {
        console.log(this.props);
        let { data } = this.state
        let { nikename, weddingdate } = this.props
        let { menu, info, dis } = this.state
        return (
            <div className='mine'>
                <div>
                    <div className='top_info'>
                        <div className='left' onClick={this.myInfo}>
                            <span className='imgcon'></span>
                            <span className='text'>{nikename.length !== 0 ? nikename : "立即登录"}<Icon type="edit" /></span>
                        </div>
                        <div className='right'>
                            <p className='dis'>
                                <span>距离婚礼还有</span>
                                <span className='days'>{dis}天</span>
                            </p>
                            <Icon type="right" />
                            <input type="date" className="date"
                                ref={(ele) => this.weddingdate = ele}
                                value={weddingdate}
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

                <div>
                    <p className="like"><span>猜你喜欢</span></p>
                    <Tab data={data} />
                </div>

            </div>
        )
    };
}

Mine = connect(mapStateToProps)(Mine);
export default Mine;