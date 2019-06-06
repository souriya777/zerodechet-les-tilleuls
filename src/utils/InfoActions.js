export const SET_INFO = 'SET_INFO'
export const REMOVE_INFO = 'REMOVE_INFO'

export const setInfo = msg => {
  return {
    type: SET_INFO,
    info: msg
  }
}

export const removeInfo = () => {
  return {
    type: REMOVE_INFO,
  }
}