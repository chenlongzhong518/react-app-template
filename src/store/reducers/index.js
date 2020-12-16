import {combineReducers} from 'redux';
import session from './session';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    session,
    router:routerReducer
});
