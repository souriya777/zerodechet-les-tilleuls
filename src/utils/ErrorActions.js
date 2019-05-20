export const SET_ERROR = 'SET_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'

export const setError = (msg) => {
  return {
    type: SET_ERROR,
    error: msg
  }
}

export const removeError = () => {
  return {
    type: REMOVE_ERROR,
  }
}