import React, { Component } from 'react';
import "../../../css/mine/shops.scss";
import { connect } from "react-redux";
import { Empty, message } from "antd";
import { sever } from "../../../api/index";

const mapStateToProps = state => {
    return {
        phone: state.user.uesrInfo.phone,
        myshops: state.user.myshops
    }
}

class Shops extends Component {
    constructor() {
        super();
        this.state = {
            myshops: [],
        }
    }

    async componentDidMount() {
        // let { data } = await sever.get('collection/shops', { phone: this.props.phone });
        this.setState({
            myshops: this.props.myshops
        });
    }

    cancel = async (w_id) => {
        let { data } = await sever.post('collection/shop', { phone: this.props.phone, w_id });
        if (data.code === 0) message.success("取消成功")
        let myshops = this.state.myshops.filter(item => item.w_id !== w_id);
        this.setState({
            myshops
        });
    }

    render() {
        let { myshops } = this.state;
        return (
            <>
                {
                    myshops.length !== 0 ?
                        <ul className="myshops">
                            {
                                myshops.map(item => <li className="con" key={item.w_id}>
                                    <div><img src={item.w_img} alt={item.w_name} /></div >
                                    <div className="text">
                                        <p>{item.w_name}</p>
                                        <p><span className="star"></span>
                                            <span className="type">企</span>
                                        </p>

                                    </div>
                                    <div className="l_con" onClick={this.cancel.bind(this, item.w_id)}>
                                        <span>取消关注</span>
                                    </div>
                                </li>)
                            }
                        </ul> :
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={"你还没有关注的商家哦"}
                        />
                }
            </>

        )
    }

}

Shops = connect(mapStateToProps)(Shops);
export default Shops;