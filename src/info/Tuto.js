import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import ROUTES from '../app/routes'
import TutoIntro from './TutoIntro'
import TutoQuestion from './TutoQuestion'
import TutoAnswer from './TutoAnswer'
import { QUESTIONS } from './TutoHelper'
import { handleBecomeExpert } from '../user/userActions'

/*
TODO detect new
TODO new => user


Connaissez vous actuellement votre production de déchets ménagers pour votre foyer?
        - oui
          1/ nb d'habitant 
          2/ goal
          TODO
        - non
          ???
          form
*/
class Tuto extends Component {

  handleSubmit = () => {
    const { history } = this.props
    const step = this.step()
    
    if (step < QUESTIONS.length) {
      console.log(`push ${ROUTES.tuto}/${step+1}`)
      history.push(`${ROUTES.tuto}/${step+1}`)
    } else {
      const { dispatch } = this.props
      dispatch(handleBecomeExpert())
    }
  }
  
  handleSubmitBack = () => {
    const step = this.step()
    
    if (step > 1) {
      const { history } = this.props
      history.push(`${ROUTES.tuto}/${step-1}`)
    }
  }

  step = () => {
    const { match } = this.props
    return Number.parseInt(match.params.step)
  }

  render() {
    const step = this.step()
    const { user } = this.props
    console.log('Tuto render', user)
    
    return (
      <div className='tuto'>
        <Route exact path={ROUTES.tuto} component={TutoIntro} />
        <Route 
          path={`${ROUTES.tuto}/:step`} 
          component={() => <TutoQuestion step={step} />}
        />
        <Route 
          path={`${ROUTES.tuto}/:step`} 
          render={() => 
            <TutoAnswer 
              onSubmit={this.handleSubmit}
              onSubmitBack={this.handleSubmitBack} 
              step={step}
              totalStep={QUESTIONS.length}
            />} 
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user })

const enhance = compose(
  connect(mapStateToProps),
  withRouter,
)

export default enhance (Tuto)