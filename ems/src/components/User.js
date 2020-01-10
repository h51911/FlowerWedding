import React, { Component } from 'react'
import '../css/merchant/merchant.css'

import { Table, Button } from 'antd';

const columns = [
    {
        title: 'Id',
        dataIndex: '_id',
    },
    {
        title: '电话号码',
        dataIndex: 'phone',
    },
    {
        title: '性别',
        dataIndex: 'gender',
    },
    {
        title: '结婚日期',
        dataIndex: 'weddingdate',
    },
    {
        title: '名称',
        dataIndex: 'nikename',
    },


];

class User extends Component {
    state = {
        selectedRowKeys: [],
        loading: false,
        list: [
            {
                _id: "5e15bb90113093151414876a",
                phone: "15574270092",
                gender: "男",
                weddingdate: 1578482575992.0,
                nikename: "15574270092"
            },
            {
                _id: "5e15bb90113093151414876a",
                phone: "15574270092",
                gender: "男",
                weddingdate: 1578482575992.0,
                nikename: "15574270092"
            },
            {
                _id: "5e15bb90113093151414876a",
                phone: "15574270092",
                gender: "男",
                weddingdate: 1578482575992.0,
                nikename: "15574270092"
            },
        ]
    };

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
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
                <div className="title1">个人用户信息管理</div>
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
                        dataSource={this.state.list} />
                </div>
            </>
        )
    }
}


export default User;
