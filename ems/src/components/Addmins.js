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
        title: '用户名称',
        dataIndex: 'username',
    },
    {
        title: '密码',
        dataIndex: 'password',
    },
];

class Addmins extends Component {
    state = {
        selectedRowKeys: [],
        loading: false,
        list: [
            {
                _id: "5e15bb901130931514142876a",
                username: "15574270092",
                password: "123456",
            }

        ]
    };


    async componentDidMount() {
        let { data } = await sever.get('/admins');
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


export default Addmins;
