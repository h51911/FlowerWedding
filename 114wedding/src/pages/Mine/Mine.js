import React, { Component } from 'react';
import Head from '../../components/head';
import '../../css/mine/mine.scss'


class Tools extends Component {
    constructor() {
        super();
        this.state = {
            title: '我的',
            menu: []
        }
        this.changMenu = this.changMenu.bind(this)
    }

    changMenu(path) {
        console.log(this.props);
        this.props.history.push(path)
    }

    render() {
        let { menu, title } = this.state
        return (
            <>
                <Head title={title} />
                <div className='top_info'>
                    <div className='left'>
                        <span className='imgcon'></span>
                        <span>网友2832687</span>
                    </div>
                    <div className='right'></div>
                </div>
                <div className='cons'>

                </div>
            </>
        )
    };
}

export default Tools;