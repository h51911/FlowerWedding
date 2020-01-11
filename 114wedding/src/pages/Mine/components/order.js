import React, { Component } from 'react';
import "../../../css/mine/order.scss";
import { Empty } from "antd";
import { connect } from "react-redux";
import { sever } from "../../../api/index";
import { myorder } from "../../../store/actions/user";

const mapStateToProps = state => {
    return {
        phone: state.user.uesrInfo.phone,
        myorders: state.user.myorders,
    }
}

class Order extends Component {
    constructor() {
        super();
        this.state = {
            myorders: []
        }
    }

    async  componentDidMount() {
        // let { data } = await sever.get('collection/orders', { phone: this.props.phone });
        this.setState({ myorders: this.props.myorders });
        // this.props.dispatch(myorder(this.state.myorders.length))
    }

    toDb = t => {
        if (t < 10) {
            return "0" + t;
        } else {
            return t;
        }
    }
    times = (times) => {
        let time = new Date(times);
        return '' + time.getFullYear() + '-' + this.toDb(time.getMonth() + 1) + '-' + this.toDb(time.getDate()) + '  ' + this.toDb(time.getHours()) + ':' + this.toDb(time.getMinutes()) + ':' + this.toDb(time.getSeconds());
    }

    render() {
        let { myorders } = this.state;
        return (
            <>
                {
                    myorders.length !== 0 ?
                        < ul className="myshops">
                            {
                                myorders.map(item => <li
                                    className="con"
                                    key={item.w_id}>
                                    <div className="imgcon">
                                        <span><img src={item.w_img} alt={item.w_name} /></span>
                                    </div >
                                    <div className="text">
                                        <p>{item.w_name}</p>
                                        <p>{this.times(item.time)}</p>
                                        <p>预约电话：{item.phone}</p>
                                    </div>
                                    <div className="l_con">
                                        {
                                            item.state ? "已确认" : "待确认"
                                        }
                                    </div>
                                </li>)
                            }
                        </ul> :
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={"你还没有预约哦"}
                        />

                }
            </>
        )
    }

}

Order = connect(mapStateToProps)(Order);
export default Order;