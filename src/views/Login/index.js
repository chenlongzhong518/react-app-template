import React from 'react'
import './index.less'
import profile from '@/images/tx.png';
import NavHeader from '@/components/NavHeader';
import { Link } from 'react-router-dom';
import actions from '@/store/actions/session';
import { connect } from 'react-redux';
import { message } from 'antd';

@connect(
    state => state.session,
    actions
)
export default class Login extends React.Component {
    handleSubmit = (event) => {
        let username = this.username.value;
        let password = this.password.value;
        if (!username) {
            message.error('账号不能为空', 2);
        } else if (!password) {
            message.error('密码不能为空', 2);
        } else {
            this.props.login({ username, password });
        }
    }
    render() {
        return (
            <div className="login">
                <NavHeader title="登 录" show="hidden" />
                <div className="login-bg">
                    <img src={profile} />
                </div>
                <div className="login-item">
                    <span className="title">账号: </span>
                    <input ref={ref => this.username = ref} type="text" placeholder="请输入账号" />
                </div>
                <div className="login-item">
                    <span className="title">密码: </span>
                    <input ref={ref => this.password = ref} type="password" placeholder="请输入密码" />
                </div>
                <button onClick={this.handleSubmit} className="login-btn">登&nbsp;&nbsp;录</button>
                <Link to="/reg">还没有账号？赶快前往注册吧！</Link>
            </div>
        )
    }
}
