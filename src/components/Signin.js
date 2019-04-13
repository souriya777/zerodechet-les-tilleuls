import React from 'react'
import Form from './Form';

const Signin = ({ match }) => {
    return (
      <div className='signin'>
        <div className="card">
          <Form />
        </div>
      </div>
    );
};

export default Signin;