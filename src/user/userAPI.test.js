import userAPI from './userAPI'
import { 
  VALID_EMAIL, 
  VALID_FIRSTNAME, 
  VALID_LASTNAME, 
  VALID_PWD,
  ALREADY_EXIST_EMAIL,
  VALID_API_USER_SIGNUP,
} from './__mocks__/userData'
import SigninException from '../utils/SigninException'
import SignupException from '../utils/SignupException'

jest.mock('./userFirebase')

describe(`signinWithLoginAndPwd`, () => {

  it(`throw SigninException('Le mot de passe saisi est invalide.')`, async() => {
    await expect(userAPI.signinWithLoginAndPwd(VALID_EMAIL, 'invalid-pwd')).rejects.toEqual(new SigninException('Le mot de passe saisi est invalide.'));
  })

  it(`throw SigninException('Il n'y a aucun utilisateur correspondant à l'email saisi.')`, async() => {
    await expect(userAPI.signinWithLoginAndPwd('invalid.email@gmail.com', 'fdsqfdsqfsdq')).rejects.toEqual(new SigninException(`Il n'y a aucun utilisateur correspondant à l'email saisi.`));
  })

})

describe(`signup`, () => {

  it(`throw SignupException('Il y a déjà un compte existant pour l'email saisi.')`, async() => {
    await expect(userAPI.signup(ALREADY_EXIST_EMAIL, VALID_PWD , VALID_FIRSTNAME, VALID_LASTNAME)).rejects.toEqual(new SignupException(`Il y a déjà un compte existant pour l'email saisi.`));
  })

})

describe(`generateExtraInfo`, () => {

  it(`return {
    name: 'Souriya Phongsavanh',
    goal: null,
    home: null,
    events: null,
  } for inputs : Souriya Phongsavanh`, () => {
    const info = userAPI.generateExtraInfo(VALID_FIRSTNAME, VALID_LASTNAME)
    
    expect(info).toEqual({
      name: 'Souriya Phongsavanh',
      goal: null,
      home: null,
      events: null,
    });
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