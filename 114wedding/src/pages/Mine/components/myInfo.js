import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Button } from 'antd';
import Pop from "../../../components/pop";
import '../../../css/mine/myinfo.scss'
import Popgen from '../../../components/pop_gen';
import { up_n, up_gen } from "../../../store/actions/user"

//将store的数据映射到 UI组件
const mapStateToProps = state => {
    return {
        info: state.user.uesrInfo
    }
}

class MyInfo extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            visible_gen: false,
            children: ''
        }
        this.up_nikename = this.up_nikename.bind(this);
        this.up_gender = this.up_gender.bind(this);
        this.up_date = this.up_date.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onOk = this.onOk.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    up_nikename() {
        let visible = true;
        let children = 'text'
        this.setState({
            visible, children
        })
    }

    up_gender() {
        let visible_gen = true;
        this.setState({
            visible_gen
        })
    }

    up_date(event) {
        let info = this.state.info
        info.weddingdate = event.target.value
        this.setState({
            info
        });
    }

    onCancel() {
        let visible = false;
        let visible_gen = false;
        this.setState({
            visible, visible_gen
        })
    }

    onOk({ nikename }) {
        let visible = false;
        this.setState({
            visible
        });
        this.props.dispatch(up_n(nikename))
    }

    onSave({ gender }) {
        let visible_gen = false;
        this.setState({
            visible_gen
        });
        this.props.dispatch(up_gen(gender))
    }

    toDb = t => {
        if (t < 10) {
            return "0" + t;
        } else {
            return t;
        }
    }
    time = () => {
        let time = new Date(this.props.info.weddingdate);
        return '' + time.getFullYear() + '-' + this.toDb(time.getMonth() + 1) + '-' + this.toDb(time.getDate())
    }

    btnSave = () => {
        this.props.dispatch({
            type: 'UP_INFO_ASYNC',
            payload: this.props.info
        })
    }

    logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("Authorization")
    }

    render() {
        console.log(this.props);
        let { info } = this.props
        let { children, visible, visible_gen } = this.state
        return (
            <div className="myinfo">
                <ul className="info_list">
                    <li className="info_con">
                        <span>昵称</span>
                        <div className="info">{info.nikename}</div>
                        <span onClick={this.up_nikename}>
                            {info.nikename ? <em>去填写</em> : "修改"}<Icon type="right" />
                        </span>
                    </li>
                    <li className="info_con">
                        <span>性别</span>
                        <div className="info">{info.gender}</div>
                        <span onClick={this.up_gender}>修改
                            <Icon type="right" /></span>
                    </li>
                    <li className="info_con">
                        <span >婚期</span>
                        <div className="info">
                            {this.time()}
                        </div>
                        <span className="upcon">修改
                            <Icon type="right" />
                            <input type="date" className="date"
                                ref={(ele) => this.weddingdate = ele}
                                value={info.weddingdate}
                                onChange={this.up_date}
                            />
                        </span>
                    </li>
                    <li className="info_con phone">
                        <span>手机</span>
                        <div className="info">{info.phone}</div>
                    </li>
                </ul>
                <div className="btn" onClick={this.btnSave}>
                    <Button type="primary" block>
                        保存
                </Button>
                </div>
                <div className="btn" onClick={this.logout}>
                    <Button type="primary" block>
                        退出
                </Button>
                </div>

                <Pop
                    children={children}
                    visible={visible}
                    onCancel={this.onCancel}
                    onOk={this.onOk}
                    info={info}
                ></Pop>
                <Popgen
                    children={children}
                    visible={visible_gen}
                    onCancel={this.onCancel}
                    onSave={this.onSave}
                    info={info}
                    gender={info.gender}
                ></Popgen>
            </div>

        )
    };
}

MyInfo = connect(mapStateToProps)(MyInfo);
export default MyInfo;