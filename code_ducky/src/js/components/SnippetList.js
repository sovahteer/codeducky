import React, { Component } from 'react';
import SnippetListItem from './SnippetListItem.js';

class SnippetList extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    let list = [];
    const results = this.props.data.results;
    for(let index in results){
      list.push(
        <SnippetListItem key={index} handlers={this.props.handlers} data={results[index]}/>
      );
    }
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default SnippetList;
