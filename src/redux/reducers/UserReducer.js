import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
  } from "../constants/userConstants";

  function usersListReducer(state = { products: [] }, action) {
    switch (action.type) {
      case USER_LIST_REQUEST:
        return { loading: true, products: [] };
      case USER_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      case USER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  export {
    usersListReducer
  };
  
  