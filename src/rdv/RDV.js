import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from '../user/userActions'

// import TimePicker from 'react-gradient-timepicker'
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

class RDV extends Component {

  state = {
    date: undefined,
    time: undefined,
  }

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  handleChange = time => {
    console('val:' + time.format24)
  }

  onChangeDate = date => {
    console.log('Date: ', date)
    this.setState({date})
  } 
  onChangeTime = time => {
    console.log('Time: ', time)
    this.setState({time})
  } 

  render() {
    // const theme = 'Mojito'
    // const theme = 'Quepal'
    const {date, time} = this.state
    const { classes } = this.props

    return (
      <div className='rdv'>
        RDV
        <DateFormatInput name='date-input' value={date} onChange={this.onChangeDate}/>
        <TimeFormatInput name='time-input' value={time} onChange={this.onChangeTime}/>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    )
  }
}

const styles = theme => (
  {textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
})

// export default connect()(RDV)
export default withStyles(styles)(RDV)