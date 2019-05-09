import sharedAPI from './sharedAPI'

export const LOAD_DATA = 'LOAD_DATA'

export const handleLoadData = () => {
  sharedAPI.loadData()
  return {
    type: LOAD_DATA,
  }
}