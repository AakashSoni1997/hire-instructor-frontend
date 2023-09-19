import axios from "axios";
import { toast } from "react-toastify";
import { baseUrlPostGres } from "../constant";
import { apiHeader } from "./ApiHeader";
import {
  ADD_GROUP_CLASSES_ERROR,
  ADD_GROUP_CLASSES_SUCCESS,
  GROUP_CLASSES_LIST_ERROR,
  GROUP_CLASSES_LIST_SUCCESS,
} from "./Type";

export const AddGroupClass = (formdata) => async (dispatch) => {
  // dispatch({ type: IS_LOADING });
  await axios
    .post(`${baseUrlPostGres()}/api/add-group-class`, formdata, {
      headers: apiHeader(),
    })
    .then((response) => {
      dispatch({
        type: ADD_GROUP_CLASSES_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.response.data.message, { theme: "colored" });
      dispatch({
        type: ADD_GROUP_CLASSES_ERROR,
        payload: errors,
      });
    });
};

export const GroupClassListMyProfile = () => async (dispatch) => {
  // dispatch({ type: IS_LOADING });
  await axios
    .get(`${baseUrlPostGres()}/api/group-list`, {
      headers: apiHeader(),
    })
    .then((response) => {
      dispatch({
        type: GROUP_CLASSES_LIST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.response.data.message, { theme: "colored" });
      dispatch({
        type: GROUP_CLASSES_LIST_ERROR,
        payload: errors,
      });
    });
};
