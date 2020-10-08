import { api, usersConstants } from "../../utils/constants";

export const loginUserAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: usersConstants.LOGIN_USER, payload: data });
  } catch (error) {
    throw new Error(error);
  }
};

export const logoutUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: usersConstants.LOGOUT_USER, payload: null });
  } catch (error) {
    throw new Error(error);
  }
};
