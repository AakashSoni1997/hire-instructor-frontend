import { USERLIST_SUCCESS, IS_LOADING, USER_DETAIL_SUCCESS, USER_VERIFICATION_SUCCESS } from "../actions/Type";

const initialState = {
    user_list: {},
    user_detail: [],
    user_verification: {},
    loading: false
}

const UsersReducers = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case IS_LOADING:
            return {
                ...state,
                loading: true
            }
        case USERLIST_SUCCESS:
            return {
                ...state,
                user_list: payload,
                loading: false
            }
        case USER_DETAIL_SUCCESS:
            return {
                ...state,
                user_detail: payload,
                loading: false
            }
        case USER_VERIFICATION_SUCCESS:
            return {
                ...state,
                user_verification: payload,
                loading: false
            }
        default:
            return state
    }
}

export default UsersReducers