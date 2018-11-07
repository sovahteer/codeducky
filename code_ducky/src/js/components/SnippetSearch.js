import React, { Component } from 'react';

class SnippetSearch extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    return (
      <div>
        <label htmlFor='terms'>Search for</label>
        <input
          type='text'
          id='terms'
          onChange={(e) => this.props.handlers.search(e)}
          value={this.props.data.query.terms}
        />
        <label htmlFor='categories'>in</label>
        <select
          id='categories'
          onChange={(e) => this.props.handlers.search(e)}
          value={this.props.data.query.category}
        >
          <option>Everything</option>
          <option>Tags</option>
          <option>Owner</option>
          <option>Tags and owner</option>
          <option>Name and descrition</option>
        </select>
      </div>
    );
  }
}

export default SnippetSearch;
