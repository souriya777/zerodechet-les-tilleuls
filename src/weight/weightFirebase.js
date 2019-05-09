import Firebase, { WEIGHTS_REF }  from '../app/firebase'

export const getWeight = uid => Firebase.doc(`${WEIGHTS_REF}/${uid}`)

export const getWeightList = () => Firebase.collection(WEIGHTS_REF)

export const addWeight = data => {
  const collection = Firebase.collection(WEIGHTS_REF)
  return collection.add(data)
}