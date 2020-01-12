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
        title: '商家名称',
        dataIndex: 'w_name',
    },
    {
        title: '图片',
        dataIndex: 'w_img',
    },
    {
        title: '类型',
        dataIndex: 'w_kind',
    },
    {
        title: '地址',
        dataIndex: 'w_area',
    },
    {
        title: '活动',
        dataIndex: 'w_infoBox',
    },
    {
        title: '评价',
        dataIndex: 'w_comment',
    },
    {
        title: '系数',
        dataIndex: 'w_difficulty',
    },
    {
        title: '标题',
        dataIndex: 'w_title',
    },
    {
        title: '详细地址',
        dataIndex: 'w_addr',
    },
];

/* const list = [];
for (let i = 0; i < 20; i++) {
    list.push({
        key: i,
        w_name: "广州古摄影",
        w_img: "https://pic11.wed114.cn/pic9/201902/2019022716082027141878x300_300_0.jpg",
        w_kind: "婚纱影楼",
        w_area: "越秀区",
        w_infoBox: "在线预约｜送定制情侣对戒+送件上门",
        w_comment: 1475,
        w_difficulty: 2,
        w_title: "广州古摄影",
        w_addr: "芳村大道东146号宏信922创意园",
        id: ` ${i + 1}`,
    });
} */
class Merchant extends Component {
    state = {
        selectedRowKeys: [],
        loading: false,
        list: [
            {
                _id: "5e157809dad0599b6d831371a",
                w_name: "广州古摄影",
                w_img: "https://pic11.wed114.cn/pic9/201902/2019022716082027141878x300_300_0.jpg",
                w_kind: "婚纱影楼",
                w_area: "越秀区",
                w_infoBox: "在线预约｜送定制情侣对戒+送件上门",
                w_comment: 1475,
                w_difficulty: 2,
                w_title: "广州古摄影",
                w_addr: "芳村大道东146号宏信922创意园"
            }
        ]
    };

    async componentDidMount() {
        let { data } = await sever.get('/shops');
        //console.log("data:", data);
        this.setState({
            list: data
        })
    }
    start = () => {

        let list = this.state.list.filter(item => {
            if (!this.state.selectedRowKeys.includes(item._id)) {
                return item
            }
        });
        this.setState({
            list
        })

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
                <div className="title1">商家列表信息管理</div>
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


export default Merchant;
