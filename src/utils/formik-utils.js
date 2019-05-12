
export const isValid = (errors, fieldName) => {
  return errors[fieldName] !== undefined 
    && errors !== null
}