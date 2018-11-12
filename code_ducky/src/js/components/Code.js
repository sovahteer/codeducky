import React, { Component } from 'react';

class Code extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    return (
      <pre className='prettyprint'>
        {this.props.file}
      </pre>
    );
  }
}

export default Code;
