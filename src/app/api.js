import { Firebase }  from '../app/firebase'

const DB = new Firebase().INSTANCE

let API = {};


// USER API
API.signinUser = async (login, pwd) => {
  const user = await DB.signin(login, pwd)
  return formatUser(user)
}

API.signinWithGoogle = async () => {
  const user = await DB.signinWithGoogle()
  return formatUser(user)
}

API.signinWithFacebook = async () => {
  const user = await DB.signinWithFacebook()
  return formatUser(user)
}

API.signupUser = async (login, pwd) => {
  return await DB.signup(login, pwd)
}

API.signout = async () => {
  return await DB.signout()
}

API.updateProfile = async (firstName, lastName) => {
  const name = displayName(firstName, lastName)
  return await DB.updateProfile(name)
}

API.resetPwd = async (email) => {
  return await DB.resetPwd(email)
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
  console.log(DB.addWeight(newWeight))
}

const convertToWeight = (nbPers, nbDays, totalWeight, date, type) => {
  const timestamp = DB.toFirebaseTimestamp(date)

  return {
    nbPers, 
    nbDays, 
    totalWeight, 
    date: timestamp,
    type
  }
}

export default API