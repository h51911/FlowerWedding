import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import '../css/login/login.css'
//import img1 from '../doc/logo/bgimg.jpg'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let username = this.props.form.getFieldValue('username');
                //console.log('username' + username)
                this.props.history.push('/home', { username })

            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <div className="dl">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入正确的用户名' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入正确的密码' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="请输入密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false,
                            })(<Checkbox>七天免登陆</Checkbox>)}
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </>
        )
    }
}
const Logins = Form.create({ name: 'Login' })(Login);
export default Logins;