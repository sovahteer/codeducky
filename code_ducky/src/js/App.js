import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class App extends Component {
  constructor(props){
    super(props);
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBtcD656OwghKMY_lRka6lws85y51XX5fs",
      authDomain: "codeducky-f79ed.firebaseapp.com",
      databaseURL: "https://codeducky-f79ed.firebaseio.com",
      projectId: "codeducky-f79ed",
      storageBucket: "codeducky-f79ed.appspot.com",
      messagingSenderId: "761178755848"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
