import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Dialog from './Dialog';

class Form extends Component {

  // TODO use hook to factorize 
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  }

  render () {
    return (
      <Dialog title={this.props.title} msg={this.props.error} isError={true}>
        {/* FIXME Slot */}
        <div>{this.props.header}</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__body">
            {this.props.inputs}
          </div>
          <div className="form__footer">
            <div className="form__footer-item">
              {this.props.asterixTop}
            </div>
            <div className="form__footer-item">
              <button type="submit" className="btn btn--primary">{this.props.submitLabel}</button>
            </div>
            <div className="form__footer-item">
              {this.props.asterixBottom}
            </div>
          </div>
        </form>
      </Dialog>
    )
  }
}

Form.propTypes = {
  title: PropTypes.string,
};

export default Form;