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
        title: '手机号码',
        dataIndex: 'phone',
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
        title: '用户Id',
        dataIndex: 'u_id',
    }
];

class Attention extends Component {
    state = {
        selectedRowKeys: [],
        loading: false,
        list: [
            {
                _id: '5e15bb90113s0931514142876a',
                phone: '15574270092',
                w_id: "5e15bb901130931514142876a",
                w_name: "15574270092",
                w_img: "545455",
                u_id: "123456",
            }

        ]
    };


    async componentDidMount() {
        let { data } = await sever.get('/collection/shops');
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


export default Attention;