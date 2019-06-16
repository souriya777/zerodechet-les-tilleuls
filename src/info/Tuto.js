import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import ROUTES from '../app/routes'
import Back from '../common-ui/Back'
import TutoIntro from './TutoIntro'
import TutoQuestion from './TutoQuestion'
import TutoAnswer from './TutoAnswer'
import { handleBecomeExpert } from '../user/userActions'

const NB_QUESTIONS = 3

class Tuto extends Component {

  handleSubmit = () => {
    const { history, dispatch } = this.props
    const step = this.step()
    
    if (step < NB_QUESTIONS) {
      history.push(`${ROUTES.tuto}/${step+1}`)
    } else {
      dispatch(handleBecomeExpert())
    }
  }
  
  handleSubmitBack = () => {
    const step = this.step()
    const { history } = this.props
    
    if (step > 1) {
      history.push(`${ROUTES.tuto}/${step-1}`)
    } else {
      history.push(`${ROUTES.tuto}`)
    }
  }

  step = () => {
    const { match } = this.props
    return Number.parseInt(match.params.step)
  }

  render() {
    const step = this.step()
    
    return (
      <div className='tuto'>
        <div className='bloc'>
          <Route exact path={ROUTES.tuto} component={TutoIntro} />
          <Route 
            path={`${ROUTES.tuto}/:step`} 
            component={() => <Back action={this.handleSubmitBack} />}
          />
          <Route 
            path={`${ROUTES.tuto}/:step`} 
            component={() => <TutoQuestion step={step} />}
          />
          <Route 
            path={`${ROUTES.tuto}/:step`} 
            render={() => 
              <TutoAnswer 
                onSubmit={this.handleSubmit}
                step={step}
              />} 
            />
        </div>
      </div>
    )
  }
}

const enhance = compose(
  connect(),
  withRouter,
)

export default enhance (Tuto)