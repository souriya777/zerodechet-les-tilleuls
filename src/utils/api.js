import {
  _signin
} from './_DATA'

let API = {};

API.signinUser = async (login, pwd) => {
  // TODO test
  //  FIXME format user
  return await _signin(login, pwd)
}

API.signupUser = (name, login, pwd) => {
  // TODO test
  return true;
}

API.signout = async () => {
  return null
}

API.sendMsg = (login, msg)  => {
  // TODO test
}

export default API