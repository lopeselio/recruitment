import React from 'react';
// import logo from './../src/assets/acmlogo.png';
import './styles/common.css'
import Footer from './components/Footer/main'
import Front from './components/Front/main'
import Domain from './components/Domains/main'
import About from './components/About/main';



class App extends React.Component {
    render() {
        return ( < div className = "App" >
            <
            Front / >
            <
            About / >
            <
            Domain / > { /* <Footer/> */ } <
            /div>
        );
    }
}

export default App;