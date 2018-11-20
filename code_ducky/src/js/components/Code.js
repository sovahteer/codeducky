import React, { Component } from 'react';

class Code extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() { // TODO: Make sure this calls prettyprint when necessary, use componentDidUpdate(prevProps)
    return (
      <pre className='prettyprint'>
        {this.props.file}
      </pre>
    );
  }
}

export default Code;
