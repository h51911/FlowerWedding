import React, { Component } from 'react';
import Head from '../../../components/head';
// import '../../css/tools/task.scss'
class Task extends Component {
    constructor() {
        super();
        this.state = {
            menu: []
        }
    }

    render() {
        return (
            <>
                <Head title='结婚任务' />
                Task
            </>
        )
    };
}

export default Task;