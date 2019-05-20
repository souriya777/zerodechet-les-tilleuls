import sharedAPI from './sharedAPI'

export const LOAD_DATA = 'LOAD_DATA'

export const handleLoadData = uid => {
  sharedAPI.loadData(uid)
  return {
    type: LOAD_DATA,
  }
}