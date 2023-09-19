import { CARD_CREATE_ERROR, CARD_CREATE_SUCCESS, CARD_LIST_ERROR, CARD_LIST_SUCCESS, IS_LOADING, PAY_BY_CARD_ERROR, PAY_BY_CARD_SUCCESS } from "../actions/Type";

const initialState = {
    card_list: [],
    card_remove: {},
    card_pay: {},
    create_card: {},
    // payment_success:{},
    loading: false,
};


export const CardReducers = (
    state = initialState,
    { type, payload } = {}
) => {
    switch (type) {
        case IS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CARD_LIST_SUCCESS:
            return {
                ...state,
                card_list: payload,
                loading: false,
            };
        case CARD_LIST_ERROR:
            return {
                ...state,
                card_list: payload,
                loading: false,
            }
        case CARD_CREATE_SUCCESS:
            return {
                ...state,
                create_card: payload,
                loading: false,
            };
        case CARD_CREATE_ERROR:
            return {
                ...state,
                create_card: payload,
                loading: false,
            }
        case PAY_BY_CARD_SUCCESS:
            return {
                ...state,
                card_pay: payload,
                loading: false,
            };
        case PAY_BY_CARD_ERROR:
            return {
                ...state,
                card_pay: payload,
                loading: false,
            }
        // case INSTRUCTOR_PAYMENT_SUCCESS:
        //     return {
        //         ...state,
        //         payment_success: payload,
        //         loading: false,
        //     };
        // case INSTRUCTOR_PAYMENT_ERROR:
        //     return {
        //         ...state,
        //         payment_success: payload,
        //         loading: false,
        //     }
        default:
            return state;
    }
};