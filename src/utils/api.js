import { Firebase }  from '../app/firebase'

let API = {};

let firebaseSingleton = (() => {
  let instance = null

  const getInstance = () => {
    if (instance === null) {
      instance = new Firebase()
    }
    return instance
  }

  return { getInstance }
})()

const getDBInstance = () => firebaseSingleton.getInstance()

// USER API

API.signinUser = async (login, pwd) => {
  const user = await getDBInstance().signin(login, pwd)
  return formatUser(user)
}

API.signinWithGoogle = async () => {
  const user = await getDBInstance().signinWithGoogle()
  return formatUser(user)
}

API.signinWithFacebook = async () => {
  const user = await getDBInstance().signinWithFacebook()
  return formatUser(user)
}

API.signupUser = async (login, pwd) => {
  return await getDBInstance().signup(login, pwd)
}

API.signout = async () => {
  return await getDBInstance().signout()
}

API.updateProfile = async (firstName, lastName) => {
  const name = displayName(firstName, lastName)
  return await getDBInstance().updateProfile(name)
}

API.resetPwd = async (email) => {
  return await getDBInstance().resetPwd(email)
}

API.sendMsg = (login, msg)  => {
  // TODO test
}

const formatUser = userDB => {
  const user = userDB.user
  return {
    uid: user.uid,
    name: user.displayName,
    photo: user.photoURL
  }
}

const displayName = (firstName, lastName) => {
  return firstName + ' ' + lastName
}

// GARBAGE API
API.addWeight = async (nbPers, nbDays, totalWeight, date, type) => {
  const newWeight = convertToWeight(nbPers, nbDays, totalWeight, date, type)
  getDBInstance().addWeight(newWeight)
}

const convertToWeight = (nbPers, nbDays, totalWeight, date, type) => {
  return {
    nbPers, 
    nbDays, 
    totalWeight, 
    date, 
    type
  }
}

export default API