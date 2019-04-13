import React from 'react';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

// FIXME keep this solution?
const FormRouter = (props) => {
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