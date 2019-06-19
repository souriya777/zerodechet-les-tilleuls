import { unionWith }  from 'lodash/array'
import { isEqual }  from 'lodash/lang'

import { 
  SET_RDV,
  SET_RDV_LIST,
  REMOVE_RDV,
} from './rdvActions'

export default function rdv (state = null, action) {
  let rdv, rdvList, rdvId

  switch (action.type) {
    case SET_RDV:
      rdv = action.rdv
      rdvList = state
      return unionWith([rdv], rdvList, isEqual)
    case SET_RDV_LIST:
      return action.rdvList
    case REMOVE_RDV:
      rdvId = action.rdvId
      rdvList = state
      return rdvList.filter(r => r.rdvId !== rdvId)
    default:
      return state;
  }
}