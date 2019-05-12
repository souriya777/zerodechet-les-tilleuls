import Firebase, { USERS_REF }  from '../app/firebase'

export const signin = (email, pwd) => 
    Firebase.auth.signInWithEmailAndPassword(email, pwd)

export const signinWithGoogle = () => Firebase.auth.signInWithPopup(Firebase.googleProvider)

export const signinWithFacebook = () => Firebase.auth.signInWithPopup(Firebase.facebookProvider)

export const signinWithTwitter = () => Firebase.auth.signInWithPopup(Firebase.twitterProvider)

export const signup = (email, pwd) => 
Firebase.auth.createUserWithEmailAndPassword(email, pwd)

export const signout = () => Firebase.auth.signOut()

export const resetPwd = email => Firebase.auth.sendPasswordResetEmail(email)

export const updateProfile = name => {
  Firebase.auth.currentUser.updateProfile({displayName: name})
  return Firebase.auth.currentUser
}

export const getUser = async email => {
  let result = undefined

  await Firebase.db.collection(USERS_REF)
    .where('email', '==', email)
    .get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        result = doc.data()
      })
    })

  return result
}