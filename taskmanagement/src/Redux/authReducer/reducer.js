import {
  Edit_Profile,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  Logout_Success,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../actionTypes";

const initialstate = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: null,
  userId:null
};

export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST: {
      return { ...state, isLoading: true };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case SIGNUP_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token:payload,
        userId:payload
       
      };
    }
    case LOGIN_FAILURE: {
      return { ...state, isError: true,isLoading:false };
    }
    case Logout_Success: {
      return { ...state, isAuth: false, token: null, user: {} };
    }

    case Edit_Profile: {
      return { ...state, isLoading: false, user: payload };
    }
    default: {
      return state;
    }
  }
};
