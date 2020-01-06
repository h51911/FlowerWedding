import React, { Component } from 'react';
import Head from '../../../components/head';
// import '../../css/tools/task.scss'
class Budget extends Component {
    constructor() {
        super();
        this.state = {
            menu: []
        }
    }


    render() {
        return (
            <>
                <Head title='预算详情' />
                Budget
            </>
        )
    };
}

export default Budget;