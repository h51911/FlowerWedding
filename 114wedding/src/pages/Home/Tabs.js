import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';
import '../../css/home/tabs.css'

const Tabs = ({ data, change }) => {

    return (
        <>
            <section>{data.map((item, index) => (
                <div className="tabVideo" key={item.comment} onClick={change}>
                    <div className="video">
                        <img src={item.url} />
                    </div>
                    <div className="title">
                        <span>{item.genre}</span>
                        <p>{item.title}</p>
                    </div>
                    <div className="site">
                        {item.adder}&nbsp; | &nbsp;
                        {item.text} &nbsp;&nbsp;
                        <Icon type="message" />
                        {item.comment}条</div>
                    <div className="price">
                        ￥{item.price}
                    </div>
                </div>
            ))}

            </section>

        </>
    )
}

export default withRouter(Tabs)