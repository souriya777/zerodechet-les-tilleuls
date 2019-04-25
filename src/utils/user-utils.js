export const isLogged = (user) => {
  return user !== null && user !== undefined && user.uid !== undefined
}

export const isNotLogged = (user) => {
  return ! isLogged(user)
}