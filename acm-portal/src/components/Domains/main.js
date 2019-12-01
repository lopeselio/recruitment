import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import './../../styles/domain.css'
import tech from './../../assets/technical.svg'
import mgmt from './../../assets/management.svg'
import des from './../../assets/design.svg'

export default class Domain extends Component {
  render () {
    return (
      <div className='domainContent'>
        <div className='heading'> Our Domains </div>
        <Grid className='domainGrid' container spacing={2}>

          <Grid
            className='tech'
            item xs={12}
            md={4}
          >
            <div className='tech-lg'>
              <img
                className='lg'
                src={tech}
              />
            </div> <div className='desc'> Technical and Research</div>

          </Grid>

          <Grid
            className='management'
            item xs={12}
            md={4}
          >
            <div className='management-lg'>
              <img
                className='lg'
                src={mgmt}
              />
            </div> <div className='desc'>Management and Editorial </div>
          </Grid>

          <Grid
            className='design' item xs={12}
            md={4}
          >
            <div className='design-lg'>
              <img
                className='lg'
                src={des}
              />
            </div>
            <div className='desc'>Design and UI/UX</div>

          </Grid>

        </Grid>
      </div>
    )
  }
}
