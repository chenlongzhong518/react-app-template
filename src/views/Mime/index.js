import React from 'react'
import './index.less'
import { Button } from 'antd';
import NavHeader from '@/components/NavHeader';
export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 456
        };
    }
    gotoPage() {
        this.props.history.push({ pathname: '/home', query: { name: '/home' } })
    }
    render() {
        return (
            <div className="mime">
                 <NavHeader title="我 的" />
                <h1>我是Mime页面</h1>
                <Button type="primary" onClick={this.gotoPage.bind(this)}>跳转首页</Button>
            </div>
        )
    }
}
