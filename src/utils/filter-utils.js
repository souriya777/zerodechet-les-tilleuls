export const ALL_ID = -1

export const all = (myArray, isMale = true) =>
  isMale 
    ? ['Tous'].concat(myArray)
    : ['Toutes'].concat(myArray)

export const allId = myArray =>
  [ALL_ID].concat(myArray)

export const filter = (myArray, field, keyword) =>
  myArray.filter(elt => 
    escape(elt[field]).match(escape(keyword))
  )

const escape = input => {
  const cleanInput = input.toString().toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g, "")

  return cleanInput
}