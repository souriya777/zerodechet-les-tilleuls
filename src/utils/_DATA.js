let user = {
  uid: 'fs8989Fdfqfdsfdsfqsdfsq',
  name: 'Souriya Phongsavanh',
  photoURL: 'https://lh3.googleusercontent.com/a-/AAuE7mC-1369yY_uKJPs-C4bJm2tRZCnGWQtKxQMctZsnFg=s192'
}

export const _signin = (email, pwd) => {
  // TODO call firebase instead
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(user)}, 1000);
  })
}