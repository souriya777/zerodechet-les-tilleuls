import React, { Component } from 'react';
import { 
  Route} from 'react-router-dom';

import './sass/main.scss';

import Loading from './pages/Loading';

const LazyWelcome = React.lazy(() => import('./components/Welcome'));

// TODO error handling
// TODO state management

class App extends Component {
  state = {
    user: null,
  }

  render() {
    // if (this.state.user === null) {
    //   return <Redirect to='/welcome' />
    // }
    const user = this.state.user;

    return (
      <>
        <React.Suspense fallback={<Loading />}>
            <Route 
              path="/" 
              render={(props) => <LazyWelcome {...props} user={user} /> }
            />
        </React.Suspense>
      </>
    );
  }
}

export default App;
