import React, { Component } from 'react';

class SnippetListItem extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    const data = this.props.data
    return (
      <li>
        <h4>{data.title}</h4>
        Author: {data.author}<br/>
        Tags: {data.tags.join(', ')}
      </li>
    );
  }
}

export default SnippetListItem;
