import React, { Component } from 'react'

import RdvItem from './RdvItem'

class RdvList extends Component {
  render() {
    const { items } = this.props
    // FIXME
    const userSubscribed = false

    return (
      <>
        {items.map(item => (
          <>
            <RdvItem 
              title={item.title} 
              type={item.type} 
              where={item.where}
              when={item.when}
              count={item.count} 
              maxCount={item.maxCount}
              userSubscribed={userSubscribed}
            />
          </>
        ))}
      </>
    )
  }
}

export default RdvList