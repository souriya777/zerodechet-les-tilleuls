import React, { Component } from 'react'
import { connect } from 'react-redux'

import RdvItem from './RdvItem'

class RdvList extends Component {

  render() {
    const { items, userRdvList } = this.props
    return (
      <>
        {items.map(item => {
          const rdv = findRdv(userRdvList, item.id)
          const userSubscribed = rdv !== null
          const wait4 = userSubscribed && rdv.waiting
          

          return <RdvItem 
                  id={item.id}
                  key={item.id}
                  title={item.title} 
                  type={item.type} 
                  where={item.where}
                  when={item.when}
                  count={item.count} 
                  maxCount={item.maxCount}
                  userSubscribed={userSubscribed}
                  wait4={wait4}
                />
        })}
      </>
    )
  }
}

const findRdv = (list, itemId) => {
  let result = null

  if (list !== null) {
    const found = list.filter(e => e.rdvId === itemId)
    if (found.length > 0) {
      result = found[0]
    }
  } 

  return result
}

const mapStateToProps = state => { 
  const { user, rdv } = state

  const uid = user ? user.uid : null

  return { 
    uid,
    userRdvList: rdv
  }
}

export default connect(mapStateToProps)(RdvList)