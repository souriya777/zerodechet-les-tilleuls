import API from '../app/api'

export const LOAD_DATA = 'LOAD_DATA'

export const handleLoadData = () => {
  API.loadData()
  return {
    type: LOAD_DATA,
  }
}