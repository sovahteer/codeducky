import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Header from './components/Header.js';
import Content from './components/Content.js';
import config from './config.js';

class App extends Component {
  constructor(props){
    super(props);
    // Initialize Firebase
    if(!firebase.apps.length)
      firebase.initializeApp(config);
    
    const db = firebase.firestore();
    
    db.settings({ //Disable deprecated features 
      timestampsInSnapshots: true
    });
    
    db.collection('snippets').get().then((r) => {
      r.forEach((doc) => console.log(doc.data()));
    });
  }
  
  render() {
    return (
      <>
        <Header/>
        <Content/>
      </>
    );
  }
}

export default App;
