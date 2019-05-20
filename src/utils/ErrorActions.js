export const SET_ERROR = 'SET_ERROR'

export const setError = (msg) => {
  return {
    type: SET_ERROR,
    error: msg
  }
}