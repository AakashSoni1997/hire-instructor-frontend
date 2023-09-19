import {
    IS_PROFILE_LOADING,
    SUCCESS_COMPLETE_PROFILE_PERSONAL_DETAILS,
    SUCCESS_COMPLETE_PROFILE_QUALIFICATIONS,
    SUCCESS_COMPLETE_PROFILE_TEACHING_DETAILS,
    SUCCESS_COMPLETE_PROFILE_AVAILABILITY,
    SUCCESS_COMPLETE_PROFILE_BANK_DETAILS,
    ERROR_COMPLETE_PROFILE_PERSONAL_DETAILS,
    ERROR_COMPLETE_PROFILE_QUALIFICATIONS,
    ERROR_COMPLETE_PROFILE_TEACHING_DETAILS,
    ERROR_COMPLETE_PROFILE_AVAILABILITY,
    ERROR_COMPLETE_PROFILE_BANK_DETAILS
} from "../actions/Type";

const initialState = {
    loading: false,
    personal_detail: {},
    qualifications: {},
    teaching_details: {},
    availability: {},
    bank_details: {}
};


export const CompleteProfileReducers = (
    state = initialState,
    { type, payload } = {}
) => {
    switch (type) {
        case IS_PROFILE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SUCCESS_COMPLETE_PROFILE_PERSONAL_DETAILS:
            return {
                ...state,
                personal_detail: payload,
                loading: false,
            };
        case ERROR_COMPLETE_PROFILE_PERSONAL_DETAILS:
            return {
                ...state,
                personal_detail: payload,
                loading: false,
            };
        case SUCCESS_COMPLETE_PROFILE_QUALIFICATIONS:
            return {
                ...state,
                qualifications: payload,
                loading: false,
            };
        case ERROR_COMPLETE_PROFILE_QUALIFICATIONS:
            return {
                ...state,
                qualifications: payload,
                loading: false,
            }
        case SUCCESS_COMPLETE_PROFILE_TEACHING_DETAILS:
            return {
                ...state,
                teaching_details: payload,
                loading: false,
            }
        case ERROR_COMPLETE_PROFILE_TEACHING_DETAILS:
            return {
                ...state,
                teaching_details: payload,
                loading: false,
            }
        case SUCCESS_COMPLETE_PROFILE_AVAILABILITY:
            return {
                ...state,
                availability: payload,
                loading: false,
            }
        case ERROR_COMPLETE_PROFILE_AVAILABILITY:
            return {
                ...state,
                availability: payload,
                loading: false,
            }
        case SUCCESS_COMPLETE_PROFILE_BANK_DETAILS:
            return {
                ...state,
                bank_details: payload,
                loading: false,
            }
        case ERROR_COMPLETE_PROFILE_BANK_DETAILS:
            return {
                ...state,
                bank_details: payload,
                loading: false,
            }
        default:
            return state;
    }
};