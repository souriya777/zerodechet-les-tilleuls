import React from 'react'

import Card from './Card';

const Dialog = (props) => {
  return (
    <Card>
      <div className="dialog">
          <h2 className="dialog__title heading-2">
            {props.title}
          </h2>
          <p className={`dialog__msg dialog__msg${props.isError? '--error' : ''}`}>
            {props.msg}
          </p>
          {props.children}
      </div>
    </Card>
  );
}

export default Dialog;
