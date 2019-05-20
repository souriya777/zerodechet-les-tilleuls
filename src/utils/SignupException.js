class SignupException extends Error {
  constructor(message) {
    super(message)
    this.name = 'SignupException'
  }
} 

export default SignupException