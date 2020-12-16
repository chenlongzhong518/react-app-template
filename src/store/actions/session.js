import * as types from '../action-types';
import { login, logout, reg } from '@/api/session';
import { push } from 'react-router-redux';
import { message } from 'antd';

export default {
    reg(body) {
        return function (dispatch, getState) {
            reg(body).then(payload => {
                dispatch({ type: types.SET_SESSION, payload });             
                if (!payload.error) {
                    message.success(payload.success, 2)
                    dispatch(push('/login'));
                }
            });
        }
    },
    login(body) {
        return function (dispatch, getState) {
            login(body).then(payload => {
                dispatch({ type: types.SET_SESSION, payload });
                if (!payload.error) {
                    sessionStorage.setItem('user', JSON.stringify(payload.user))
                    message.success(payload.success, 2)
                    let state = getState().router.location.state;
                    let target = state ? state.from : '/home';
                    dispatch(push(target));
                } else {
                    message.error(payload.error, 2)
                }
            });
        }
    },
    logout(body) {
        return function (dispatch, getState) {
            logout(body).then(payload => {
                dispatch({ type: types.SET_SESSION, payload });
                sessionStorage.setItem('user', null)
                dispatch(push('/login'));
            });
        }
    }
}
