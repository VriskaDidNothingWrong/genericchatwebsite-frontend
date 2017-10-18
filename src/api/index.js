import store from '../store';
import { actions as profileActions } from '../reducks/profile';

const handleErrors = (response, callback) => {
  if (response.error) {
    callback({error: response.error});
    throw Error(response.error);
  } else if (!response && !response.ok) {
    callback({
      error: `Server error: ${response.statusText} [${response.status}]`,
      status_code: response.status
    });
    throw Error(response.statusText);
  }

  return response;
}

export const backendPost = (endpoint, params, callback) => {
  params = {
    ...params,
    token: profileActions.getToken(store.getState())
  };
  const realEndpoint = '/api' + endpoint;
  const paramData = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');

  fetch(realEndpoint, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: paramData
  })
    .then(response => response.json())
    .then(response => handleErrors(response, callback))
    .then(response => callback(response))
    .catch((error) => {
      console.error(error);
      // XXX/TODO: Do more stuff?
    });
};

export const backendGet = (endpoint, params, callback) => {
  const paramData = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');
  const realEndpoint = '/api' + endpoint + paramData;

  fetch(realEndpoint, {
    credentials: 'include',
    method: 'get'
  })
    .then(response => handleErrors(response, callback))
    .then(response => response.json())
    .then(response => callback(response))
    .catch((error) => {
      console.error(error);
      // XXX/TODO: Do more stuff?
    });
};

export default {
  backendPost,
  backendGet
};
