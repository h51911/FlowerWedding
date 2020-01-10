import React, { Component } from 'react';
import { Radio } from 'antd'
import '../css/mine/pop.scss';

class Popgen extends Component {
    constructor() {
        super();
        this.state = {
            gender: ''
        }
        this.onSave = this.onSave.bind(this)
    }
    componentDidMount() {
        let gender = this.props.gender
        this.setState({
            gender
        })
    }
    onChange = e => {
        this.setState({
            gender: e.target.value,
        });
    };
    onSave() {
        this.props.onSave(this.state)
    }

    render() {
        let { visible, onCancel } = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };

        return (
            <div className={visible === false ? 'hidden pop' : 'show pop'}>
                <div className="pop_con">
                    <div className="modal-content">
                        <Radio.Group onChange={this.onChange} value={this.state.gender}>
                            <Radio style={radioStyle} value={"男"}> 男</Radio>
                            <Radio style={radioStyle} value={"女"}>女 </Radio>
                        </Radio.Group>
                    </div>
                    <div className="modal-footer">
                        <span className="do-btn" onClick={onCancel}>取消</span>
                        <span className="do-btn do-btn-primary" onClick={this.onSave}>确定</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popgen