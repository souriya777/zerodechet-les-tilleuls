import Firebase, { WEIGHTS_REF, SUB_COLLECTION_REF }  from '../app/firebase'

class WeightFirebase {

  getAll = async uid  => {
    let result = []
    
    await Firebase.db.collection(WEIGHTS_REF)
    .doc(uid).collection(SUB_COLLECTION_REF)
    .orderBy('startDate')
    .get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        result.push({ id: doc.id, data: doc.data()  })
      })
    })
    
    return result
  }

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
  
  addWeightBatch = async dataList => {
    const user = Firebase.auth.currentUser
    const BATCH = Firebase.batch

    dataList.forEach(data => {
      const newRef = Firebase.db.collection(WEIGHTS_REF).doc(user.uid).collection(SUB_COLLECTION_REF).doc()
      BATCH.set(newRef, data)
    })

    BATCH.commit()
  }

  getLastWeight = async uid => {
    let result = null

    await Firebase.db.collection(WEIGHTS_REF)
    .doc(uid).collection(SUB_COLLECTION_REF)
    .orderBy('startDate', 'desc')
    .limit(1)
    .get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        result = doc.data()
      })
    })
    
    return result
  }

  removeAllWeight = async () => {
    const user = Firebase.auth.currentUser
    const BATCH = Firebase.batch
    const REF = `/${WEIGHTS_REF}/${user.uid}/${SUB_COLLECTION_REF}`

    const weightList = await Firebase.fetchExistingDocs(REF)
    weightList.forEach(id => {
      BATCH.delete(Firebase.db.collection(REF).doc(id))
    })
    BATCH.commit()
  }
}

export default new WeightFirebase()