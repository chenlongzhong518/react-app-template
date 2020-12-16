import React from 'react'
import './index.less'
import { Button } from 'antd';
import NavHeader from '@/components/NavHeader';
import actions from '@/store/actions/session';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import profile from '@/images/tx.png';

@connect(
    state => state.session,
    actions
)
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 123
        };
    }
    gotoPage() {
        this.props.history.push({ pathname: '/mime', query: { name: '/mime' } })
    }
    logout() {
        let username = this.props.user.username;
        this.props.logout({ username });
    }
    render() {
        return (
            <div className="home">
                <NavHeader title="首 页" show="hidden"/>
                <div >
                    <img src={profile} className="img" />
                    {
                        this.props.user ? <a>{this.props.user.username}</a> : <Link to="/login">登录</Link>
                    }
                </div>
                <h1>我是Home页面</h1>
                <Button type="primary" onClick={this.gotoPage.bind(this)}>跳转我的</Button>
                <Button type="primary" onClick={this.logout.bind(this)}>退出登录</Button>
            </div>
        )
    }
}
