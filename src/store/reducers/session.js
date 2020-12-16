import * as types from '../action-types';

let initState = {
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : '',
    success: null,
    error: null
}
export default function (state = initState, action) {
    switch (action.type) {
        case types.SET_SESSION:
            return action.payload;
        default:
            return state;
    }
}
