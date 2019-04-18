import { signinUser } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { dispatch } from 'rxjs/internal/observable/range';

export const SIGNIN = 'SIGNIN'
export const GET_USER = 'GET_USER'

const signin = (login, pwd) => {
  // signinUser(login, pwd)
  //   .then(({ user }) => {
  //     return {
  //       type: SIGNIN,
  //       user
  //     }
  //   })
  return {
    type: SIGNIN,
    user: {
      uid: 'toto',
      name: 'Souriya',
      photoURL: 'fkdqslm'
    }
  }
}

const getUser = (user) => {
  return {
    type: GET_USER,
    user
  }
}

export const handleSignin = (login, pwd) => {
  return (dispatch) => {
    dispatch(showLoading())
    const user = {
      uid: 'toto',
      name: 'Souriya',
      photoURL: 'fkdqslm'
    }
    dispatch(getUser(user))
    setTimeout(() => {
      console.log('timeout to simulate server latency');
      dispatch(hideLoading())
    }, 2000);
  }
}