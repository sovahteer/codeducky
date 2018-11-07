import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Header from './components/Header.js';
import Content from './components/Content.js';

class App extends Component {
  constructor(props){
    super(props);
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBtcD656OwghKMY_lRka6lws85y51XX5fs",
      authDomain: "codeducky-f79ed.firebaseapp.com",
      //databaseURL: "https://codeducky-f79ed.firebaseio.com",
      projectId: "codeducky-f79ed",
      //storageBucket: "codeducky-f79ed.appspot.com",
      messagingSenderId: "761178755848"
    };
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
