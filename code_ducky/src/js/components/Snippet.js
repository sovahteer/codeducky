import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Files from './Files.js';
import Description from './Description.js';
import Tags from './Tags.js';

class Snippet extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      files: {}
    };
  }
  
  componentDidMount(){
    const db = firebase.firestore();
    const currentSnippet = this.props.data.currentSnippet;
    if(currentSnippet){
      db.collection('snippets').doc(currentSnippet).get().then(result => {
        const data = result.data();
        console.log('Snippet fetch result:', data);
        this.setState({
          files: data.code
        })
      });
    }
  }
  
  render() {
    return (
      <>
        <Files files={this.state.files}/>
        <Description/>
        <Tags/>
      </>
    );
  }
}

export default Snippet;
