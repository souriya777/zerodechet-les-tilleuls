export const isLogged = user => {
  return user !== null && user !== undefined && user.uid !== undefined
}

export const isNew = user => {
  return isLogged(user) && user.isNew 
}