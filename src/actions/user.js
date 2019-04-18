import API from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_USER = 'GET_USER'

const getUser = (user) => {
  return {
    type: GET_USER,
    user
  }
}

export const handleSignin = (login, pwd) => {
  return async (dispatch) => {
    dispatch(showLoading())
    const user = await API.signinUser(login, pwd)
    dispatch(getUser(user))
    dispatch(hideLoading())
  }
}