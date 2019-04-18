import {
  _signin
} from './_DATA'

export const signinUser = (login, pwd) => {
  // TODO test
  //  FIXME format user
   return _signin(login, pwd)
    .then((user) => user)
}

export const signupUser = (name, login, pwd) => {
  // TODO test
  return true;
}

export const sendMsg = (login, msg)  => {
  // TODO test
}
