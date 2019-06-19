import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// import ROUTES from '../app/routes'
//<Link to={`${ROUTES.rdv}/${item.id}`}></Link> 

import RdvItem from './RdvItem'

class RdvList extends Component {
  render() {
    const { items } = this.props
    // FIXME
    const userSubscribed = false

    return (
      <>
        {items.map(item => 
            <RdvItem 
              id={item.id}
              key={item.id}
              title={item.title} 
              type={item.type} 
              where={item.where}
              when={item.when}
              count={item.count} 
              maxCount={item.maxCount}
              userSubscribed={userSubscribed}
            />
        )}
      </>
    )
  }
}

export default RdvList