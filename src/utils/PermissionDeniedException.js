class PermissionDeniedException extends Error {
  constructor(message) {
    super(message)
    this.name = 'PermissionDeniedException'
  }
} 

export default PermissionDeniedException