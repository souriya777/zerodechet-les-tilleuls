class SigninException extends Error {
  constructor(message) {
    super(message)
    this.name = 'SigninException'
  }
} 

export default SigninException