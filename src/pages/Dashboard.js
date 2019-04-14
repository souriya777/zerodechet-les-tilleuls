import React from 'react'
import { Route } from 'react-router-dom'

import Menu from '../components/Menu';

const Dashboard = (props) => {
  const path = props.location.path;
  
  return (
    <div className='spa-container dashboard'>
      <Menu />
      <main className='content'>
        <Route path={`${path}/garbage`} component={Garbage} />
      </main>
    </div>

  )
}

export default Dashboard;
