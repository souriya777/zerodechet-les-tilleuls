import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

// FIXME keep this solution?
const FormRouter = (props) => {
  const { match, location, history } = props;
  console.log(props);
  return(
    <>
      <div className='form form--router'>
        {/* <Link className='btn btn--ghost' to="/signin">Se connecter</Link>
        <Link className='btn btn--primary' to="/signup">Créer un profil</Link> */}

        {/* add if statement based on route */}
        {/* hide btn when we are on signin or signup */}
        {/* implement form */}
      </div>
    </>
  );
}
export default withRouter(FormRouter);