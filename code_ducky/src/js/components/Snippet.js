import React, { Component } from 'react';
import Files from './Files.js';
import Description from './Description.js';
import Tags from './Tags.js';

class Snippet extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    return (
      <>
        <Files/>
        <Description/>
        <Tags/>
      </>
    );
  }
}

export default Snippet;
