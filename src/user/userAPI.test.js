import userAPI, { getAdultNames } from './userAPI'
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

describe(`getAdultNames`, () => {

  it(`throw an Error('Argument "list" is missing.')
      for list=undefined `, () => {
      expect(getAdultNames).toThrow(new Error('Argument "list" is missing.'))
  })

  it(`
    for: 
      myArray=[
        { name: 'Souriya', birthdate: '1984-05-08' },
        { name: 'Solan', birthdate: '2013-04-04' },
        { name: 'Sarah', birthdate: '2000-06-24' },
      ]
      majority (NOT_PROVIDED)
    returns:
      ['Souriya', 'Sarah']
      `, () => {
      const myArray = [
        { name: 'Souriya', birthdate: '1984-05-08' },
        { name: 'Solan', birthdate: '2013-04-04' },
        { name: 'Sarah', birthdate: '2000-06-24' },
      ]
    expect(getAdultNames(myArray)).toEqual(['Souriya', 'Sarah'])
  })

  it(`
    for: 
      myArray=[
        { name: 'Souriya', birthdate: '1984-05-08' },
        { name: 'Solan', birthdate: '2013-04-04' },
        { name: 'Sarah', birthdate: '2000-06-24' },
      ]
      majority=21
    returns:
      ['Souriya']
      `, () => {
      const myArray = [
        { name: 'Souriya', birthdate: '1984-05-08' },
        { name: 'Solan', birthdate: '2013-04-04' },
        { name: 'Sarah', birthdate: '2000-06-24' },
      ]
      const majority = 21
    expect(getAdultNames(myArray, majority)).toEqual(['Souriya'])
  })
})