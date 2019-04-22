import {
  _signin
} from './_DATA'

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

API.signinUser = async (login, pwd) => {
  const user = await getDBInstance().signin(login, pwd)
  return formatUser(user)
}

API.signupUser = async (login, pwd) => {
  return await getDBInstance().signup(login, pwd)
}

API.signout = async () => {
  return await getDBInstance().signout()
}

API.updateProfile = async (name) => {
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
  console.log(userDB)
  return {
    uid: user.uid,
    name: user.displayName,
    photo: user.photoURL
  }
}

export default API