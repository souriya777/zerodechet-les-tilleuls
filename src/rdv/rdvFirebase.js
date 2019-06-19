import Firebase, { RDV_REF, SUB_COLLECTION_REF }  from '../app/firebase'

class RdvFirebase {

  getRdvDoc = async id => {
    const user = Firebase.auth.currentUser
    let result = null

    await Firebase.db.collection(RDV_REF)
    .doc(user.uid).collection(SUB_COLLECTION_REF)
    .where('rdvId', '==' , id)
    .limit(1)
    .get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        result = doc
      })
    })

    return result
  }

  getRdv = async id => {
    const doc = await this.getRdvDoc(id)
    return doc.data()
  }

  getRdvList = async () => {
    const user = Firebase.auth.currentUser
    let result = []

    await Firebase.db.collection(RDV_REF)
    .doc(user.uid).collection(SUB_COLLECTION_REF)
    .get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const rdv = doc.data()
        result.push(
          { rdvId: rdv.rdvId, waiting: rdv.waiting}
        )
      })
    })

    return result
  }

  setRdv = async (id, waiting) => {
    const doc = await this.getRdvDoc(id)

    if (doc === null) {
      this.addRdv(id, waiting)
    } else {
      this.updateRdv(id, waiting, doc)
    }
  }

  addRdv = async (id, waiting) => {
    const user = Firebase.auth.currentUser
    const BATCH = Firebase.batch

    const newRef = Firebase.db.collection(RDV_REF).doc(user.uid).collection(SUB_COLLECTION_REF).doc()
    BATCH.set(newRef, { rdvId: id, waiting })

    BATCH.commit()
  }

  updateRdv = async (id, waiting, doc) => {
    const user = Firebase.auth.currentUser
    Firebase.db.collection(RDV_REF).doc(user.uid).collection(SUB_COLLECTION_REF).doc(doc.id).set(
      Object.assign({}, doc.data(), { waiting })
    )
  }

  deleteRdv = async id => {
    const user = Firebase.auth.currentUser

    const doc = await this.getRdvDoc(id)

    const ref = Firebase.db.collection(RDV_REF).doc(user.uid).collection(SUB_COLLECTION_REF).doc(doc.id)

    const BATCH = Firebase.batch

    BATCH.delete(ref)

    BATCH.commit()
  }
}

export default new RdvFirebase()