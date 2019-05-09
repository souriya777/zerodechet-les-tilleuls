import Firebase, { USERS_REF, WEIGHTS_REF, EVENTS_REF }  from '../app/firebase'

import weightsJSON from '../utils/_DATA-WEIGHT.json'
import userJSON from '../utils/_DATA-USER.json'
import eventJSON from '../utils/_DATA-EVENT.json'


export const loadDataWeight = async() => loadData(WEIGHTS_REF, weightsJSON)

export const loadDataUser = async() => loadData(USERS_REF, userJSON)

export const loadDataEvent = async() => loadData(EVENTS_REF, eventJSON)


export const loadData = async (ref, json) => {
  console.log(`-------LOAD ${ref.toUpperCase()} DATA----------`)
  console.group()

  // fetching all existing doc
  const DOC_IDS = await fetchExistingDocs(ref)
  
  // delete existing docs
  deleteDocs(DOC_IDS, ref)

  // populate
  populate(json, ref)
  
  console.groupEnd()
}

const fetchExistingDocs = async ref => {
  console.log('FETCHING...')
  let result = []
  await Firebase.db.collection(ref).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        result.push(doc.id)
    })
  })
  return result
}

const deleteDocs = async (docs, ref) => {
  console.log('DELETING...')
  // deleting all doc
  docs.forEach((id) => {
    Firebase.db.collection(ref).doc(id).delete().then(() => {
      console.log('DELETE', id)
    }).catch((error) => {
      console.error(`ERROR when deleteting ${id} `, error)
    })
  })
}

const populate = async(json, ref) => {
  console.log('WRITING...', ref, json)
  json.forEach(o => {
    Firebase.db.collection(ref).add(o)
    console.log('WRITE', o)
  })
}

export const getWeightList = () => {
  console.log('READING ALL WEIGHTS')
  Firebase.db.collection(WEIGHTS_REF)
    .where('uid', '==', 'fs8989Fdfqfdsfdsfqsdfsq')
    .get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.group()
        console.log('READ UID', doc.id, " => ", doc.data())
        console.groupEnd()
      })
    })
}

export const getWeightListBtwDates = () => {
  console.log('READING ALL WEIGHTS, BETWEEN DATE 01/04/19 AND 30/04/19')
  Firebase.db.collection(USERS_REF)
    .where('uid', '==', 'fs8989Fdfqfdsfdsfqsdfsq')
    .where('startDate', '>=', this.setTimestamp('2019-04-01'))
    .where('startDate', '<', this.setTimestamp('2019-05-01'))
    .get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.group()
        console.log('READ UID & DATE', doc.id, " => ", doc.data())
        console.groupEnd()
      })
    })
}