import { 
  UID,
  EMAIL,
} from '../../utils/common-test/common-data'

export const ALREADY_EXIST_EMAIL = 'existemail@gmail.com'

export const VALID_FIREBASE_USER = {
  uid: UID,
  email: EMAIL,
  displayName: 'Souriya Phongsavanh',
  photoURL: 'https://lh3.googleusercontent.com/-NvIwRG-KKOc/AAAAAAAAAAI/AAAAAAABIUo/o313nBEskvE/photo.jpg',
}

export const VALID_API_USER = {
  uid: UID,
  name: 'Souriya Phongsavanh',
  photo: 'https://lh3.googleusercontent.com/-NvIwRG-KKOc/AAAAAAAAAAI/AAAAAAABIUo/o313nBEskvE/photo.jpg',
}

export const VALID_API_USER_SIGNUP = {
  ...VALID_API_USER,
  photo: null,
}

export const VALID_FIREBASE_EXTRA_INFO = {
  goal: 0.250,
  home: [
    {id: 1, name: "Somsack Phongsavanh"},
    {id: 2, name: "Somvilack Phongsavanh"},
    {id: 3, name: "Sourideth Phongsavanh"},
    {id: 4, name: 'Soucksakhone Phongsavanh'},
    {id: 5, name: 'Souriya Phongsavanh'},
    {id: 6, name: 'Sourisack Phongsavanh'}
  ],
  events: [
    '2i57wbPYh8wAb4srGvs4', '6typu1Dz5RgHjHZUpU8M', '8HueLRA98A94BPsxlarX'
  ]
}