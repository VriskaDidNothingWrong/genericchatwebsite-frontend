import { backendPost, backendGet } from './index';

const login = (username, password, callback) => {
  backendPost("/user/log_in", {username: username, password: password}, callback);
}

const register = (username, password, password_confirm, email, callback) => {
  backendPost("/user/register", {
    username: username,
    password: password,
    password_again: password_confirm,
    email_address: email
  }, callback);
}

const profile = (callback) => {
  backendGet("/user", {}, callback);
}

export default {
  login,
  register,
  profile
};
