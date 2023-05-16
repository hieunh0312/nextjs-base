import {
  APP_CHECK_AUTH,
  APP_CHECK_AUTH_SUCCESS,
  APP_INIT,
  APP_INIT_SUCCESS,
} from "./actionTypes";

const initialState = {
  isCheckAuthDone: false,
  isAppInitialized: false,
};

// eslint-disable-next-line default-param-last
export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_CHECK_AUTH: {
      return {
        ...state,
        isCheckAuthDone: false,
      };
    }

    case APP_CHECK_AUTH_SUCCESS: {
      return {
        ...state,
        isCheckAuthDone: true,
      };
    }

    case APP_INIT: {
      return {
        ...state,
        isAppInitialized: false,
      };
    }

    case APP_INIT_SUCCESS: {
      return {
        ...state,
        isAppInitialized: true,
      };
    }
    default: {
      return state;
    }
  }
}
