import React, { Component } from 'react';
import SnippetSearch from './SnippetSearch.js';
import SnippetList from './SnippetList.js';

class Browse extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    return (
      <>
        <SnippetSearch handlers={this.props.handlers} data={this.props.data}/>
        <SnippetList handlers={this.props.handlers} data={this.props.data}/>
      </>
    );
  }
}

export default Browse;
