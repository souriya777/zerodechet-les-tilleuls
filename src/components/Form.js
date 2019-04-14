import React, { Component } from 'react';

class Form extends Component {

  state = {
    user: null,
    pass: null,
  };

  getFormValues = (e) => {
    const fields = this.props.fields;
    // FIXME move in utilities?
    const result = {};
    fields.forEach(f => {
      const fieldId = f['id'];
      result[fieldId] =  e.target[fieldId].value;
    });
    return result;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formValues = this.getFormValues(e);
    this.props.onSubmit(formValues);
  }

  renderInput = (className, key, field) => {
    return <div className={className} key={key}>
    <input className="form__input" type={field.type} placeholder={field.label} id={field.id} required />
  </div>
  }

  render () {
    const title = this.props.title;
    const action = this.props.action;
    const submitLabel = this.props.submitLabel;
    const asterixTop = this.props.asterixTop;
    const asterixBottom = this.props.asterixBottom;
    
    // map over fields
    const fields = this.props.fields;
    const fieldsDisplay = fields.map((f, i) => {
      const className = (i < fields.length - 1) ? 'form__margin-bottom-medium' : 'form__margin-bottom-small';
  
      return this.renderInput(className, i, f);
    });
  
    return (
      <>
        <h2 className="heading-2 u-margin-bottom-medium">{title}</h2>
        <form 
          action={action} 
          onSubmit={this.handleSubmit}
          className="form">
          {fieldsDisplay}
          <div className="form__margin-bottom-small">
            {asterixTop}
          </div>
          <div className="form__margin-bottom-small">
            <button type="submit" className="btn btn--primary">{submitLabel}</button>
          </div>
          <div className="form__margin-bottom-small">
            {asterixBottom}
          </div>
        </form>
      </>
    );
  }
}

export default Form;