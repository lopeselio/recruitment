import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import './../../styles/footer.css'
import './../../styles/common.css'
import github from './../../assets/github.svg'
import facebook from './../../assets/facebook.svg'
import vit from './../../assets/vitlogo.png'
import acm from './../../assets/acmlogo.png'

// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

export default class Footer extends Component {
  render () {
    return (
      <div className='footerContent'>
        <Grid className='FooterGrid' container spacing={0}>

          <Grid
            className='ACM-logo'
            item xs={12}
            md={4}
          >
            <div className='ACM-lg'>
              <a href='https://www.acmvit.in/'><img
                className='acml'
                src={acm}
              />
              </a>
            </div>

          </Grid>

          <Grid
            className='social'
            item xs={12}
            md={4}
          >
            <div className='socMed'>
              <a
                className='fb'
                target='blank'
                href='https://www.facebook.com/ACM.VITU/'
              ><img className='sm' src={facebook} />
              </a>

              <a
                className='git'
                target='blank'
                href='https://github.com/ACM-VIT'
              > <img className='sm' src={github} />
              </a>

            </div>
          </Grid>

          <Grid
            className='vitLogo'
            item xs={12}
            md={4}
          >
            <div className='vitlg'>
              <img
                className='vitl'
                src={vit}
              />
            </div>
          </Grid>

        </Grid>

      </div>
    )
  }
}
