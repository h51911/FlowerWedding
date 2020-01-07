import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import img from '../../doc/login/logo.png'
import '../../css/login/login.css'


class Login extends Component {
    state = {

    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        console.log(this.props);

        const { getFieldDecorator } = this.props.form;

        return <>

            <main>
                <div className="logo">
                    <span className="skip">跳过</span>
                    <img src={img} />
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入正确的手机号码' }],
                        })(
                            <Input
                                placeholder="请输入手机号码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('text', {
                            rules: [{ required: true, message: '请输入正确的验证码' }],
                        })(
                            <Input
                                type="text"
                                placeholder="请输入验证码"
                            />

                        )
                        }
                        < span className="verification-code">获取验证码</span>
                    </Form.Item>
                    {/*  <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: false,
                        })(<Checkbox>同意《<a>用户使用协议</a>》和《<a>用户隐私协议</a>》</Checkbox>)}
 */}
                    <Button type="primary" htmlType="submit" className="login-form-button">登录 </Button>

                    {/*   </Form.Item> */}
                </Form>
            </main>
        </>

    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm;