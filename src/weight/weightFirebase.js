import Firebase, { WEIGHTS_REF, SUB_COLLECTION_REF }  from '../app/firebase'

class WeightFirebase {
  getWeight = uid => Firebase.doc(`${WEIGHTS_REF}/${uid}`)
  
  getWeightListBtwDates = async (uid, beginTimestamp, endTimestamp)  => {
    let result = []
    
    await Firebase.db.collection(WEIGHTS_REF)
    .doc(uid).collection(SUB_COLLECTION_REF)
    .where('startDate', '>=', beginTimestamp)
    .where('startDate', '<', endTimestamp)
    .orderBy('startDate')
    .get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        result.push({ id: doc.id, data: doc.data()  })
      })
    })
  
    return result
  }
  
  addWeightBatch = async (uid, dataList) => {
    const BATCH = Firebase.batch

    dataList.forEach(data => {
      const newRef = Firebase.db.collection(WEIGHTS_REF).doc(uid).collection(SUB_COLLECTION_REF).doc()
      BATCH.set(newRef, data)
    })

    BATCH.commit()
  }
}

export default new WeightFirebase()