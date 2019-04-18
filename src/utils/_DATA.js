let user = {
  uid: 'fs8989Fdfqfdsfdsfqsdfsq',
  name: 'Souriya Phongsavanh',
  photoURL: 'https://lh3.googleusercontent.com/a-/AAuE7mC-1369yY_uKJPs-C4bJm2tRZCnGWQtKxQMctZsnFg=s192'
}

const _simulateServerLatency = async (ms) => {
  return new Promise( resolve => setTimeout(resolve, ms))
}

export const _signin = async (email, pwd) => {
  // TODO call firebase instead
  await _simulateServerLatency(2000)
  return user
}