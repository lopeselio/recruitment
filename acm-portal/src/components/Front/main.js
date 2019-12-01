import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import './../../styles/front.css'
import './../../styles/common.css'
import community from './../../assets/acmfront.svg'
import { AwesomeButton } from 'react-awesome-button'
// import { AwesomeButton} from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import acm from './../../assets/acmlogo.png'
import Magnifier from 'react-magnifier'
import Typical from 'react-typical'
import About from './../../components/About/main'

export default class Front extends Component {
  render () {
    return (
      <div className='frontContent'>
        <Grid className='ACM' container spacing={0}>
          <Grid className='space' item xs={12} md={3} />
          <Grid className='logo' item xs={12} md={3}>
            <Magnifier className='acmlogo' src={acm} width={150} />
          </Grid>
          <Grid className='name' item xs={12} md={3}>
            <Typical
              id='top'
              loop={Infinity}
              wrapper='p'
              steps={[
                'Association for Computing Machinery ',
                200,
                '______ Because Technology Matters ', 200,
                'Welcome to ACM-VIT 2k19 Core Committee Recruitments', 200

              ]}

            />
            {/* <h1>Association for Computing Machinery</h1> */}
          </Grid>

          <Grid className='space' item xs={12} md={3} />
        </Grid>

        <Grid className='FrontGrid' container spacing={2}>

          <Grid className='landing' item xs={12} md={6}>
            <div className='front-img'>
              <img className='community' src={community} />
            </div>
          </Grid>

          <Grid className='landing-info' item xs={12} md={4}>
            <div className='front-info'>
              <h1>ACM</h1>
              <h2>Core Committee Selections</h2>
              Right from its inception in 2009, the ACM VIT Student Chapter has been organising and<br />
              conducting successful technical and professional development events. Teachnology is its<br />
              course and education is its objective.

              <br />
              <br />

              <div>Technical | Design | Management | Research</div>
            </div>
            <div className='button'>
              <a className='apply' href='#about'>Apply Now</a>
              {/* <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type='primary'
                ripple
                href=''
                target='_blank'
                type={select('type', ['primary', 'secondary', 'link'], 'primary')}

                loadingLabel='Loading..'
                resultLabel='Done!'
                size={select('size', [null, 'small', 'medium', 'large'], 'large')}
                disabled={boolean('disabled', false)}
                fakePress={boolean('fakePress', false)}
                cssModule={cssModule}
                action={(element, next) => {
                  action('clicked');
                  setTimeout(() => {
                    next();
                  }, 300);
                }

              }
              >
                Apply Now
              // </AwesomeButton> */}
            </div>

          </Grid>

        </Grid>

      </div>
    )
  }
}
