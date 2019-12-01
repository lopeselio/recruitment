import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
import Front from './../../../src/components/Front/main'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      registration_no: '',
      email: '',
      password: '',
      phone_num: ''
    }
  }

  handleClick (event) {
    var apiBaseUrl = ''
    console.log('values', this.state.first_name, this.stat.registration_no, this.state.email, this.state.password, this.state.phone_num)
    // To be done:check for empty values before hitting submit
    var self = this
    var payload = {
      name: this.state.name,
      registration_no: this.state.registration_no,
      email: this.state.email,
      password: this.state.password,
      phone_num: this.state.phone_num
    }
    axios.post(apiBaseUrl + '/register', payload)
      .then(function (response) {
        console.log(response)
        if (response.data.code === 200) {
          console.log('registration successfull')
          var homescreen = []
          homescreen.push(<Front parentContext={this} />)
          var regmessage = 'You have registered successfully'
          self.props.parentContext.setState({
            homescreen: homescreen,
            regmessage: regmessage


          })
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div className='formContent'>
        <div className='reg'>Register Here</div>
        <div className='instruction'>Only for First Year Students. </div>
        <div className='instruction'>Password will be required for the First Round of Recruitment.</div>
        <Grid className='FooterGrid' container spacing={0}>
          <Grid
            className='empty'
            item xs={12}
            md={2}
          />
          <Grid
            className='form'
            item xs={12}
            md={6}
          >

            <MuiThemeProvider>
              <div>
                {/* <AppBar
              title='Register'
            /> */}
                <TextField
                  // style={backgroundColor="red",color="white"}
                  hintText='Enter your Name'
                  floatingLabelText='Name'
                  onChange={(event, newValue) => this.setState({ name: newValue })}
                />
                <br />
                <TextField
                  hintText='Enter your Registration number'
                  floatingLabelText='Registration number'
                  onChange={(event, newValue) => this.setState({ registration_no: newValue })}
                />
                <br />
                <TextField
                  hintText='Enter your Email'
                  type='email'
                  floatingLabelText='Email'
                  onChange={(event, newValue) => this.setState({ email: newValue })}
                />
                <br />
                <TextField
                  type='password'
                  hintText='Enter your Password'
                  floatingLabelText='Password'
                  onChange={(event, newValue) => this.setState({ password: newValue })}
                />
                <br />
                <TextField
                  hintText='Enter your Phone Number'
                  floatingLabelText='Phone Number'
                  onChange={(event, newValue) => this.setState({ phone_num: newValue })}
                />
                <RaisedButton label='Submit' primary style={style} onClick={(event) => this.handleClick(event)} />
              </div>
            </MuiThemeProvider>
          </Grid>
          <Grid
            className='empty'
            item xs={12}
            md={4}
          />

        </Grid>
      </div>
    )
  }
}
const style = {
  margin: 15
}
export default Register
