import React, { Component } from 'react';
import Auth from './Auth.js';
import Nav from './Nav.js';

class Header extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    return (
      <div id='header'>
        <div>
          <img id='logo' alt='Codeducky logo'/>
          <h1 id='title'>CodeDucky</h1>
        </div>
        <Auth/>
        <Nav/>
      </div>
    );
  }
}

export default Header;
