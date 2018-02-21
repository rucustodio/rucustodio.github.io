import * as React from 'react';
import Nav from './Nav';
import Logo from './Logo';

export default class App extends React.Component<any, any> {

  render() {
    return(
      <div className="app">

        <Logo />
        {/* <Nav /> */}

        <div className="hero-container bg-container">
            <div className="title">
                <h3 className="hero">Ruben Custodio</h3>
                <h4 className="right">Front End Developer</h4>
            </div>
        </div>

        <div className="social">
            <h2>
                <a href="https://twitter.com/rucustodio" target="_blank">
                <i className="fa fa-twitter twitter"></i> @rucustodio</a></h2>
            <h2>
                <a href="https://www.linkedin.com/in/rubencustodio/" target="_blank"> 
                <i className="fa fa-linkedin-square linkedin" aria-hidden="true"></i> linkedin.com/rucustodio</a></h2>
            <h4>Built using React</h4>
        </div>
      </div>
    )
  }

}