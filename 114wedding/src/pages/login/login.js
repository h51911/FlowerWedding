import React, { Component } from 'react';
import { connect } from "react-redux";
import { login } from "../../store/actions/user"
import { Form, message, Input, Button, Checkbox } from 'antd';
import img from '../../doc/login/logo.png';
import '../../css/login/login.css';
import { sever } from '../../api/index';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            values: {}
        }
        this.change = this.change.bind(this)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let { data } = await sever.post('login/verifycode', {
                    phone: values.phone,
                    code: values.text
                });
                if (data.code === 1) {
                    let res = JSON.stringify(data.data[0])
                    message.success("验证成功");
                    //token写入本地
                    localStorage.setItem("Authorization", data.authorization);
                    localStorage.setItem("user", res);
                    this.props.dispatch(login(res))
                    this.props.history.push('/home');
                } else {
                    message.error("验证失败");
                }
            }
        });
    };

    change() {
        this.props.history.push('/home');
    }

    sendcode = async () => {
        let phone = this.props.form.getFieldValue('phone');
        let { data } = await sever.post('/login/sendcode', { phone });
        if (data.code === 1) {
            message.success('发送成功');
        } else {
            message.error('发送失败');
        }
    }

    render() {
        console.log(this.props);

        const { getFieldDecorator } = this.props.form;
        return <>
            <main className="main1">
                <div className="logo">
                    <span className="skip"
                        onClick={this.change}>跳过</span>
                    <img src={img} />
                </div>
                <div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('phone', {
                                rules: [{
                                    required: true,
                                    pattern: /^1[3456789]\d{9}$/,
                                    message: '请输入正确的手机号码'
                                }],
                            })(
                                <Input placeholder="请输入手机号码" />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('text', {
                                rules: [{ required: true, message: '请输入正确的验证码' }],
                            })(
                                <Input placeholder="请输入验证码" />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false,
                            })(<Checkbox>同意《<a>用户使用协议</a>》和《<a>用户隐私协议</a>》</Checkbox>)}
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                登录
                            </Button>
                        </Form.Item>
                        < span className="verification-code" onClick={this.sendcode}>获取验证码</span>
                    </Form>
                </div>
            </main>
        </>

    }
}

Login = connect()(Login);
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;