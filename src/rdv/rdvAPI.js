import RdvFirebase from './rdvFirebase'

class RdvAPI {

  getRdvList = async () => {
    return await RdvFirebase.getRdvList()
  }

  subRdv = id => 
    RdvFirebase.setRdv(id, false)
  
  unsubRdv = id => 
    RdvFirebase.deleteRdv(id)

  waitRdv = id =>
    RdvFirebase.setRdv(id, true)

}

export default new RdvAPI()