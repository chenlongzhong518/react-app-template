import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import '@/common/rest.less';
import '@/common/antd-reset.less';
import Home from './views/Home';
import Mime from './views/Mime';
import Login from './views/Login';
import Reg from './views/Reg';
import store from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import PrivateRoute from './components/PrivateRoute';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/mime" component={Mime} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  </Provider>, document.querySelector('#root')
);
