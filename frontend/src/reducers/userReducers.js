import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants'

export const userLoginReducer = (state = {}, aciton) => {
    switch(aciton.type)
    {
        case USER_LOGIN_REQUEST:
            return {loading: true}
        case USER_LOGIN_SUCCESS:
            return {loading:false, userInfo:aciton.payload}
        case USER_LOGIN_FAIL:
            return {loading:false, error: aciton.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}