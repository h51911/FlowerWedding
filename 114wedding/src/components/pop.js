import React, { Component } from 'react';
import '../css/mine/pop.scss';

class Pop extends Component {
    constructor() {
        super();
        this.state = {
            nikename: '',
        }
        this.changeNikename = this.changeNikename.bind(this);
        this.onOk = this.onOk.bind(this)
    }
    changeNikename(event) {
        this.setState({
            nikename: event.target.value
        });
    }
    onOk() {
        this.props.onOk(this.state)
    }
    render() {
        let { children, visible, onCancel } = this.props;
        return (
            <div className={visible === false ? 'hidden pop' : 'show pop'}>
                <div className="pop_con">
                    <div className="modal-content">
                        {
                            children === 'text' ? <div className="pop_inser">
                                <input
                                    type='text'
                                    className="nikename"
                                    ref={(ele) => this.nikename = ele} 
                                    value={this.state.nikename} 
                                    onChange={this.changeNikename}
                                />
                            </div> : ''
                        }
                    </div>
                    <div className="modal-footer">
                        <span className="do-btn" onClick={onCancel}>取消</span>
                        <span className="do-btn do-btn-primary" onClick={this.onOk}>确定</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pop