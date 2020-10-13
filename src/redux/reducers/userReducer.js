import { usersConstants } from "../../utils/constants";

let initState = {
  logUser: null,
};

export default (state = initState, { payload, type }) => {
  switch (type) {
    case usersConstants.LOGIN_USER:
      return { ...state, logUser: payload };
    case usersConstants.LOGOUT_USER:
      return { ...state, logUser: null };
    default:
      return { ...state };
  }
};
