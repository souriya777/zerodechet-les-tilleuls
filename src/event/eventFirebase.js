import Firebase, { EVENTS_REF }  from '../app/firebase'

export const getEventList = async() => {
  const result = []

  console.log(Firebase);
  

  await Firebase.db.collection(EVENTS_REF)
    .get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        result.push(doc)
      })
    })


  return result
}