import React from 'react'
import Navigation from '../components/Navigation';

const Dashboard = () => {
  console.log('in Dashboard');
  
  return (
    <div className='spa-container dashboard'>
      <Navigation />
      <main className='content'>
        MON CONTENU
      </main>
    </div>
  )
}

export default Dashboard;
