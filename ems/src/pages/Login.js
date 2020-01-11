import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { sever } from '../api/index'

import '../css/login/login.css'
//import img1 from '../doc/logo/bgimg.jpg'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }
    }
    handleSubmit = async e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                //console.log('Received values of form: ', values);
                let username = this.props.form.getFieldValue('username');
                let password = this.props.form.getFieldValue('password');
                //console.log('username' + username)
                //this.props.history.push('/home', { username });

                let { data } = await sever.post('/admins', { username, password });
                if (data.code === 1) {
                    this.props.history.push({ pathname: "/home", query: { username } });
                } else {
                    alert("请输入正确的账号密码！")
                }
                console.log(data, username);
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
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button">
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