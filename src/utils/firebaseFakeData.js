import Firebase, { USERS_REF, WEIGHTS_REF, EVENTS_REF, SUB_COLLECTION_REF }  from '../app/firebase'

import weightsJSON from '../utils/_DATA-WEIGHT.json'
import userJSON from '../utils/_DATA-USER.json'
import eventJSON from '../utils/_DATA-EVENT.json'

import { generateFirebaseTimestamp, generateFirebaseTimestampFromString } from '../utils/date-utils'

const moment = require('moment')

export const loadDataWeight = async uid => loadData(WEIGHTS_REF, weightsJSON, uid)
export const loadDataUser = async uid => loadData(USERS_REF, userJSON, uid)
export const loadDataEvent = async uid => loadData(EVENTS_REF, eventJSON, uid)


export const loadData = async (ref, json, uid) => {
  console.log(`-------LOAD ${ref} USER=${uid}----------`)
  console.group()

  ///////// SUB-COLLECTION
  // fetching all existing doc, in subcollection
  const SUB_REF = `/${ref}/${uid}/${SUB_COLLECTION_REF}`
  const SUB_DOC_IDS = await fetchExistingDocs(SUB_REF)

  console.log(SUB_REF, SUB_DOC_IDS)
  
  // delete existing docs
  await deleteDocs(SUB_DOC_IDS, SUB_REF)


  ///////// COLLECTION
  // fetching all existing doc
  const DOC_IDS = await fetchExistingDocs(ref)
  
  // delete existing docs
  await deleteDocs(DOC_IDS, ref)

  // populate
  await populate(json, ref, uid)
  
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
  docs.forEach(async id => {
    Firebase.db.collection(ref).doc(id).delete().then(() => {
      console.log('DELETE', id)
    }).catch((error) => {
      console.error(`ERROR when deleteting ${id} `, error)
    })
  })
}

const populate = async (json, ref, uid) => {
  if (USERS_REF === ref || EVENTS_REF === ref) {
    console.log('WRITING...', ref, json, uid)
    json.forEach(o => {
      let copy = Object.assign({}, o)
      if (ref === USERS_REF) {
        copy = Object.assign({}, copy, {uid: uid})
        Firebase.db.collection(ref).doc(uid).set(copy)
      } else {
        Firebase.db.collection(ref).doc(uid).collection(SUB_COLLECTION_REF).add(copy)
      }
      console.log('WRITE', copy)
    })
  } else {
    populateWeight(ref, uid)
  }

}

const populateWeight = async (ref, uid) => {
  // get days list
  const dayList = pastDays(100)

  // generate dynamic weight
  const weightList = dayList.map(d => {
    const dTimestamp = generateFirebaseTimestamp(d.toDate())
    return {
      nbPers: 2,
      recycled: randomWeight(600),
      norecycled: randomWeight(500),
      startDate: dTimestamp,
      endDate: dTimestamp,
      recordedDate: dTimestamp,
      email: 'souriya59@gmail.com'
    }
  })

  // adding to db
  weightList.forEach(w => {
    console.log('WRITE', w)
    Firebase.db.collection(ref).doc(uid).collection(SUB_COLLECTION_REF).add(w)
  })
}

export const getWeightList = uid => {
  console.log(`getWeightList uid=${uid}`)
  Firebase.db.collection(WEIGHTS_REF)
    .doc(uid)
    .collection(SUB_COLLECTION_REF)
    .get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data())
      })
    })
}

export const getWeightListBtwDates = async uid => {
  const begin = '2019-05-02'
  const end = '2019-05-09'
  console.log(`getWeightListBtwDates ${begin} -> ${end}`)
  let result = []

  await Firebase.db.collection(WEIGHTS_REF)
  .doc(uid)
  .collection(SUB_COLLECTION_REF)
  .where('startDate', '>=', generateFirebaseTimestampFromString('2019-05-02'))
  .where('startDate', '<', generateFirebaseTimestampFromString('2019-05-09'))
  .get().then(querySnapshot => {
      console.log(`${querySnapshot.size} results`)
      querySnapshot.forEach(doc => {
        result.push({ id: doc.id, data: doc.data()  })
        
      })
    })
  console.log(result);
  
}

const pastDays = total => {
  const result = []
  const today = moment()
  let day = moment().subtract(total, 'd')
  while (day.isBefore(today)) {
    result.push(day.clone())
    day = day.add(1, 'd')
  }
  return result
}

const randomWeight = range => Number(Math.random(1) * range).toFixed(0)