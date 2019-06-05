import { FIREBASE_ERROR_CODES } from '../utils/FirebaseErrorCodes'

class FirebaseException extends Error {
  constructor(error) {
    const msg = FIREBASE_ERROR_CODES[error.code] ? FIREBASE_ERROR_CODES[error.code] : `Une erreur est survenue sur notre serveur. Veuillez contacter notre administrateur.`
    super(msg)
    this.code = error.code
    this.name = 'FirebaseException'

    console.log(`[debug] code:${this.code}`)
    console.log(`[debug] msg:${msg}`)
  }
} 

export default FirebaseException