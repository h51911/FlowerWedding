import React, { Component } from 'react'
import '../css/merchant/merchant.css'
import { sever } from '../api/index'

import { Table, Button } from 'antd';

const columns = [
    {
        title: 'Id',
        dataIndex: '_id',
    },
    {
        title: '店铺Id',
        dataIndex: 'w_id',
    },
    {
        title: '店铺名',
        dataIndex: 'w_name',
    },
    {
        title: '店铺头像',
        dataIndex: 'w_img',
    },
    {
        title: '预约时间',
        dataIndex: 'time',
    },
    {
        title: '预约手机',
        dataIndex: 'phone',
    },
    {
        title: '用户Id',
        dataIndex: 'u_id',
    },
    {
        title: '确认订单消息',
        dataIndex: 'state',
    },
];

class Appointment extends Component {
    state = {
        selectedRowKeys: [],
        loading: false,
        list: [
            {
                _id: '5e15bb901130931ss514142876a',
                w_id: "5e15bb901130931514142876a",
                w_name: "广州钟爱一生",
                w_img: "123456",
                time: "2020-01-10",
                phone: "15574270092",
                u_id: "123456",
                state: "true",
            }

        ]
    };


    async componentDidMount() {
        let { data } = await sever.get('/collection/orders');
        //console.log("data:", data);
        this.setState({
            list: data
        })
    }

    start = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <>
                <div className="title1">后台用户信息管理</div>
                <div>
                    <div style={{ marginBottom: 16 }}>
                        <Button
                            type="primary"
                            onClick={this.start}
                            disabled={!hasSelected}
                            loading={loading}>
                            删除
                        </Button>
                        <span style={{ marginLeft: 8 }}>
                            {hasSelected ? `选中 ${selectedRowKeys.length} 条` : ''}
                        </span>
                    </div>
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={this.state.list}
                        rowKey="_id"
                    />
                </div>
            </>
        )
    }
}


export default Appointment;