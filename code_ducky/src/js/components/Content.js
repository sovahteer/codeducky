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
      snippetList: [],
      currentSnippet: ''
    };
        
    this.auth = firebase.auth();
  }
  
  handleAuthStateChanged = (user)=>{
//    console.log('Content.handleAuthStateChanged(user)', user);
    if(user){
      // TODO: Move query code to method so handleSearch can use it.
      const db = firebase.firestore();
      
      db.collection('snippets').get().then((result) => {
        let snippets = [];
        result.forEach((doc) => {
          const data = doc.data();
//          console.log(data);
          snippets.push({
            id: doc.id,
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
  
  handleSnippetItemClick = (event) => {
    console.log('Snippet item clicked. Target:', event.target);
    this.setState({
      currentSnippet: event.target.id,
      viewMode: this.viewModes.SNIPPET
    });
  }
  
  componentDidMount(){
    this.unregisterOnAuthStateChanged = this.auth.onAuthStateChanged(this.handleAuthStateChanged);
  }
  
  componentWillUnmount(){
    this.unregisterOnAuthStateChanged();
  }
  
  render() {
    const data = {};
    const handlers = {};
    let content;
    switch(this.state.viewMode){
      case this.viewModes.BROWSE:
        data.query = this.state.query;
        data.results = this.state.snippetList;

        handlers.search = this.handleSearch;
        handlers.snippetItemClick = this.handleSnippetItemClick;
        
        content = <Browse handlers={handlers} data={data}/>;
        break;
      case this.viewModes.SNIPPET:
        data.currentSnippet = this.state.currentSnippet;
        content = <Snippet data={data}/>;
        break;
    }
    return (
      <div id='content'>
        {content}
      </div>
    );
  }
}

export default Content;
