import { ADD_GROUP_CLASSES_ERROR, ADD_GROUP_CLASSES_SUCCESS, GROUP_CLASSES_LIST_ERROR, GROUP_CLASSES_LIST_SUCCESS, IS_LOADING } from "../actions/Type";

const initialState = {
    group_class_add_success:{},
    group_class_add_error:{},
    group_class_list_success:[],
    group_class_list_error:{},
    loading: false,
  };

export const GroupClassRedeucer = (
    state = initialState,
    { type, payload } = {}
  ) => {
    switch (type) {
      case IS_LOADING:
        return {
          ...state,
          loading: true,
        };
        case ADD_GROUP_CLASSES_SUCCESS:
          return {
            ...state,
            group_class_add_success: payload,
            loading: false,
          };
          case ADD_GROUP_CLASSES_ERROR:
          return {
            ...state,
            group_class_add_error: payload,
            loading: false,
          }
          case GROUP_CLASSES_LIST_SUCCESS:
            return {
              ...state,
              group_class_list_success: payload,
              loading: false,
            };
            case GROUP_CLASSES_LIST_ERROR:
            return {
              ...state,
              group_class_list_error: payload,
              loading: false,
            }
       
      default:
        return state;
    }
  };