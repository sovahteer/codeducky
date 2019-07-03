import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Browse from './Browse.js';
import Snippet from './Snippet.js';

class Content extends Component {
  viewModes = {
    BROWSE: 'browse',
    SNIPPET: 'snippet'
  };
  
  constructor(props){
    super(props);
    this.state = {
      viewMode: this.viewModes.BROWSE,
      query: {
        terms: '',
        category: 'Everything'
      },
      snippetList: []
    };
        
    firebase.auth().onAuthStateChanged(this.handleAuthStateChanged);
  }
  
  handleAuthStateChanged = (user)=>{
    console.log('Content.handleAuthStateChanged(user)', user);
    if(user){
      const db = firebase.firestore();
      
      db.collection('snippets').get().then((r) => {
        let snippets = [];
        r.forEach((doc) => {
          const data = doc.data();
          console.log(data);
          snippets.push({
            title: data.title,
            author: data.owner,
            tags: data.tags // TODO: Make sure this does not need copying.
          });
        });
        this.setState({snippetList: snippets});
      });
    }
    else{
      this.setState({snippetList: []});
    }
  }
  
  handleSearch = (event) => {
    console.log('Changed:', event.target.tagName, event.target.id);
    //console.log('This is', this);
    switch(event.target.id){
      case 'categories':
        this.setState({
          query: {
            terms: this.state.query.terms,
            category: event.target.value
          }
        });
        break;
      case 'terms':
        this.setState({
          query: {
            terms: event.target.value,
            category: this.state.query.category
          }
        });
        break;
    }
  }
  
  render() {
    let content;
    switch(this.state.viewMode){
      case this.viewModes.BROWSE:
        const data = {
          query: this.state.query,
          results: this.state.snippetList
        };
        const handlers = {
            search: this.handleSearch
        };
        content = <Browse handlers={handlers} data={data}/>;
        break;
      case this.viewModes.SNIPPET:
        content = <Snippet/>;
        break;
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default Content;
