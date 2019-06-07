import userAPI from './userAPI'
import { 
  EMAIL,
  PWD,
  NAME,
  FirebaseError,
} from '../utils/common-test/common-data'

import { 
  ALREADY_EXIST_EMAIL,
  VALID_API_USER_SIGNUP,
} from './__mocks__/userData'
import FirebaseException from '../utils/FirebaseException'

jest.mock('./userFirebase')

describe(`signinWithLoginAndPwd`, () => {

  it(`throw FirebaseException('Le mot de passe saisi est invalide.')`, async() => {
    await expect(
      userAPI.signinWithLoginAndPwd(EMAIL, 'invalid-pwd')
    ).rejects.toEqual(
      new FirebaseException(new FirebaseError('auth/wrong-password'))
    )
  })

  it(`throw FirebaseException('Il n'y a aucun utilisateur correspondant à l'email saisi.')`, async() => {
    await expect(
      userAPI.signinWithLoginAndPwd('invalid.email@gmail.com', 'fdsqfdsqfsdq')
    ).rejects.toEqual(
      new FirebaseException(new FirebaseError('auth/user-not-found'))
    )
  })

})

describe(`signinWithGoogle`, () => {

  it(`throw FirebaseException('Le serveur n'est pas joignable. Veuillez vérifier votre connexion internet.') when the user is offline`, async() => {
    await expect(
      userAPI.signinWithGoogle()
    ).rejects.toEqual(
      new FirebaseException(new FirebaseError('auth/popup-closed-by-user'))
    )
  })

})

describe(`signinWithFacebook`, () => {

  it(`throw FirebaseException('Le serveur n'est pas joignable. Veuillez vérifier votre connexion internet.') when the user is offline`, async() => {
    await expect(
      userAPI.signinWithGoogle()
    ).rejects.toEqual(
      new FirebaseException(new FirebaseError('auth/network-request-failed'))
    )
  })

})

describe(`signup`, () => {

  it(`throw FirebaseException('L'email est associé à un compte existant.')`, async() => {
    await expect(
      userAPI.signup(ALREADY_EXIST_EMAIL, PWD, NAME)
    ).rejects.toEqual(
      new FirebaseException(new FirebaseError('auth/email-already-in-use'))
    )
  })

})

describe(`onAuthStateChanged`, () => {

  it(`call callbackFn`, async() => {
    const callbackFn = jest.fn()
    const callbackFn2 = jest.fn()

    userAPI.onAuthStateChanged(callbackFn, callbackFn2)

    expect(callbackFn).toHaveBeenCalledWith(VALID_API_USER_SIGNUP)
    expect(callbackFn2).toHaveBeenCalledWith()
  })
  
})