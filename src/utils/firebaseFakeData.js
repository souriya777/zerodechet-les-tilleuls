import { firebaseTimestamp } from '../utils/date-utils'
import Firebase, { WEIGHTS_REF, SUB_COLLECTION_REF }  from '../app/firebase'

const moment = require('moment')

export const loadDataWeight = async uid => loadData(WEIGHTS_REF, uid)

const loadData = async (ref, uid) => {
  console.log(`-------LOAD USER: ${uid} REF: ${ref}----------`)
  const SUB_REF = `/${ref}/${uid}/${SUB_COLLECTION_REF}`
  const BATCH = Firebase.batch

  // FETCH
  const DOC_IDS = await fetchExistingDocs(ref)
  console.log(`fetch.doc ${ref}`, DOC_IDS)
  const SUB_DOC_IDS = await fetchExistingDocs(SUB_REF)
  console.log(`fetch.subDoc ${SUB_REF}`, SUB_DOC_IDS)

  // DELETE
  SUB_DOC_IDS.forEach(id => {
    BATCH.delete(Firebase.db.collection(SUB_REF).doc(id))
  })
  console.log(`batch.delete ${SUB_REF}`, BATCH)
  DOC_IDS.forEach(id => {
    BATCH.delete(Firebase.db.collection(ref).doc(id))
  })
  console.log(`batch.delete ${ref}`, BATCH)

  // POPULATE
  let insertList = generateWeightList()
  insertList.forEach(w => {
    const newRef = Firebase.db.collection(ref).doc(uid).collection(SUB_COLLECTION_REF).doc()
    BATCH.set(newRef, w)
  })
  console.log('populate', insertList)
  
  // COMMIT
  BATCH.commit()
  console.log('batch.commit')
}

const fetchExistingDocs = async ref => {
  let result = []
  await Firebase.db.collection(ref).get().then((querySnapshot) => {
    querySnapshot.forEach(doc => {
      result.push(doc.id)
    })
  })
  return result
}

const generateWeightList = () => {
  // get days list
  const dayList = pastDays(100)

  // generate dynamic weight
  return dayList.map(d => {
    const dTimestamp = firebaseTimestamp(d.toDate())
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

const randomWeight = range => Number.parseFloat(Number(Math.random(1) * range).toFixed(0))