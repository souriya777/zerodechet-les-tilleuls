export const ADD_ERROR = 'ADD_ERROR'

export const addError = (msg) => {
  return {
    type: ADD_ERROR,
    error: msg
  }
}