import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import './../../styles/about.css'
import acmo from './../../assets/acmoriginal.png'
import acm from './../../assets/acmlogo.png'
import acmw from './../../assets/acmw.png'


export default class About extends Component {
    render() {
        return ( <div className = 'AboutContent' >
            <Grid className = 'aboutGrid'
            container spacing = { 2 } >

            <Grid className = 'ACM'
            item xs = { 12 }
            md = { 2 } >
            <div className = 'ACM-lg' >
            <img className = 'acm'
            src = { acmo } > </img> </div > <div className = 'acminfo' >
            Founded in 1947 in the United States, the Associationfor Computing Machinery(ACM) is an international, not -
            for -profit, professional membership society.Widely regarded as the world 's largest and most distinguished scientific and educational computing society. It has more than 100,00 active members as of 2011, and it'
            s headquartered in New York City.ACM also conducts the annual ACM Turing Award, which is considered to be the Nobel Prize in Computing. </div>

            </Grid>

            <Grid className = 'ACM'
            item xs = { 12 }
            md = { 2 } >
            <div className = 'ACM-lg' >
            <img className = 'acm'
            src = { acm } > </img></div > <div className = 'acmminfo' > ACM marked its presence in VIT Vellore in 2009 as a student chapter.Since then, ACM - VIT has become one of the most prestigious chapters in the University.Just like its parent organisation, ACM - VIT strives to provide the best opportunities to students who wish to acquirenew skills in the field of Computer Science.Its memebers have completed a plethora of projects in VIT.These include website
            for Team Pravega and Team Falcons, and also the numerous tweaks the students notice in the VTOP and VTOPbeta portals, making it difficult to ignore the influence the chapter has on the University.Code2Create, Reverse Coding, Codart, Learn2Compete, Learn2Augmen and PyFlask are some of the most celebrated events in VIT, which are run by ACM.Its immense influence and unparalleled popularity make ACM - VIT one of the most sought - after chapters by students. </div>  </Grid >



            <Grid className = 'ACM'
            item xs = { 12 }
            md = { 2 } >
            <div className = 'ACM-lg' >
            <img className = 'acm'
            src = { acmw } > </img></div > < div className = 'acminfo' >
            ACM believes in equal opportunities
            for all, irrespective of one 's gender, and the absence of women in technology is an obstacle which it aims to overcome. The idea was the one which led to the conception of ACM-W, a community for women whose aim is to reduce the gender gap in technology, by creating a safe place which femalestudents can use to achieve their goals, without facing the hurdles they do in the outside world. </div> </Grid>


            </Grid>

            </div>
        )
    }
}