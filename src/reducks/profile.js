import apiLogin from '../api/login';

// Defaults

const DEFAULT_PROFILE_STATE = {
  logged_in: false,
  profile: {},
  last_error: ''
};

// Action types

const GOT_ERROR = "profile/GOT_ERROR";
const PROFILE_UPDATE = "profile/PROFILE_UPDATE";

const actionTypes = {
  GOT_ERROR,
  PROFILE_UPDATE
}

// Action creators

const doLogin = (username, password) => dispatch => {
  apiLogin.login(username, password, (results) => {
    dispatch(loginCallback(results))
  });
};

const doRegister = (username, password, password_confirm, email) => dispatch => {
  apiLogin.register(username, password, password_confirm, email, (results) => {
    dispatch(loginCallback(results))
  });
};

const doProfileFetch = () => dispatch => {
  apiLogin.profile(token => {
    dispatch({
      type: PROFILE_UPDATE,
      ...token
    });
  });
};

const loginCallback = (results) => {
  if (results.error) {
    return {
      type: GOT_ERROR,
      error: results.error
    }
  }

  return {
    type: PROFILE_UPDATE,
    profile: results.profile
  }
}

const getLastError = state => {
  return state.profile.last_error;
}

const getToken = state => {
  return state.profile.token;
}

const getProfile = state => {
  return state.profile.profile;
}

const actions = {
  doLogin,
  doRegister,
  doProfileFetch,
  getLastError,
  getToken,
  getProfile
};

// Reducer

const profile = (state = DEFAULT_PROFILE_STATE, action) => {
  let stateDelta = {};

  switch (action.type) {
    case PROFILE_UPDATE:
      if (state.last_error) {
        stateDelta.last_error = ''
      }

      if (action.token) {
        stateDelta.token = action.token;
        delete action.token
      }

      if (action.logged_in) {
        stateDelta.logged_in = action.logged_in;
        delete action.logged_in
      }

      stateDelta.profile = state.profile || action.profile;
      return {...state, ...stateDelta};
    case GOT_ERROR:
      stateDelta.last_error = action.error;
      return {...state, ...stateDelta};
    default:
      return state;
  }
};


export {
  actionTypes,
  actions
};

export default profile;
