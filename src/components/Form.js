import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const title = 'Créer un profil'; // TODO factorize
  const action = 'testa';
  const email = {id: 'email', label: 'E-mail', type: 'email'};
  const pwd = {id: 'pwd', label: 'Mot de passe', type: 'password'};
  const submitLbl = 'Fait!';

  return (
    <>
      <h2 class="heading-2 u-margin-bottom-medium">{title}</h2>
      <form action={action} className="form">
        <div className="form__group">
          <input className="form__input" type={email.type} placeholder={email.label} id={email.id} required />
        </div>
        <div className="form__group">
          <input className="form__input" type={pwd.type} placeholder={pwd.label} id={pwd.id} required />
        </div>
        <div className="form__group">
          <p className='asterix'>En vous inscrivant vous acceptez les <Link className='link' to='/terms'>termes et les conditions</Link>.</p>
        </div>
        <div className="form__group">
          <button type="submit" class="btn btn--primary">{submitLbl}</button>
        </div>
        <div className="form__group">
          <p className='asterix'>Pas encore de compte?<br /><Link className='link' to='/signup'>Créer un profil</Link></p>
        </div>
      </form>
    </>
  );
}

export default Form;