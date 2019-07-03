import React, { Component } from 'react';
import Auth from './Auth.js';
import Nav from './Nav.js';

class Header extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    return (
      <div>
        <div>
          <img alt='Codeducky logo'/>
          <h1>CodeDucky</h1>
        </div>
        <Auth handlers={this.props.handlers}/>
        <Nav/>
      </div>
    );
  }
}

export default Header;
