export const USER_KEY = 'user'

let LocalStorage = {}

LocalStorage.get = key => JSON.parse(localStorage.getItem(key))

LocalStorage.set = (key, value) => localStorage.setItem(key, JSON.stringify(value))

LocalStorage.remove = key => localStorage.removeItem(key)

export default LocalStorage