import React, { Component } from 'react';
import './index.less';
import { withRouter } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

@withRouter
export default class NavHeader extends Component {
    render() {
        return (
            <div className="navheader">
                {
                    this.props.show !== 'hidden' ? <LeftOutlined className="icon" onClick={() => this.props.history.goBack()} /> : ''
                }
                {this.props.title}
            </div>
        )
    }
}
