import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Header from './components/Header.js';
import Content from './components/Content.js';
import config from './config.js';

class App extends Component {
  constructor(props){
    super(props);
    // Initialize Firebase
    if(!firebase.apps.length)
      firebase.initializeApp(config);
    
//    const db = firebase.firestore();
//    
//    db.settings({ //Disable deprecated features 
//      timestampsInSnapshots: true
//    });
//    
//    db.collection('snippets').get().then((r) => {
//      r.forEach((doc) => console.log(doc.data()));
//    });
    
    this.uiConfig = { // Firebase Auth settings
      callbacks: {
        signInSuccessWithAuthResult: this.signInSuccess,
        signInFailure: this.signInFailure
      },
      signInFlow: 'redirect', // Use redirect for oAuth
      signInOptions:[ // Supported login providers
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      tosUrl: this.displayTos, // Placeholder methods to show tos and ppol
      privacyPolicyUrl: this.displayPrivacyPolicy
    };
    
    this.state = {
      signedIn: false
    }
  }
  
  signInSuccess = (authResult)=>{
    console.log('Signed in:', authResult);
    this.setState({
      signedIn: true
    });
    return false;
  }
  
  signInFailure = (error)=>{
    //return handleUIError(error);
    console.log(error);
  }
  
  displayTos(){
    window.alert('Implement ToS display here');
  }
  
  displayPrivacyPolicy(){
    window.alert('Implement Privacy policy display here');
  }
  
  render(){
    let login;
    
    if(this.state.signedIn === false){
      login = (
        <div className='loginOverlay'>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    
    return (
      <>
        {login}
        <Header/>
        <Content/>
      </>
    );
  }
}

export default App;
