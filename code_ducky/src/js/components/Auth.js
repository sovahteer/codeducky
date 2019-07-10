import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends Component {
  constructor(props){
    super(props);
    
    this.state = {user: null};
    
    this.auth = firebase.auth();
  }
  
  handleAuthStateChanged = (user)=>{
    let state;
//    console.log('Auth.handleAuthStateChanged(user)', user);
    if(user){
      state = {
        user:{
          photoURL: user.photoURL,
          displayName: user.displayName
        }
      };
    }
    else{
      state = {user: null};
    }
    this.setState(state);
  }
  
  handleSignOut = ()=>{
//    console.log('Auth.handleSignOut()');
    this.auth.signOut();
  }
  
  componentDidMount(){
    this.unregisterOnAuthStateChanged = this.auth.onAuthStateChanged(this.handleAuthStateChanged);
  }
  
  componentWillUnmount(){
    this.unregisterOnAuthStateChanged();
  }
  
  render() {
    const user = this.state.user;
    let userInfo;
    let photo;
    if(user){
      if(user.photoURL)
        photo = (
          <img id='avatar' src={user.photoURL} alt="User pic"/>
        );
      userInfo = (
        <div id='userInfo'>
          {user.displayName}<br/>
          <button id='signOut' onClick={this.handleSignOut}>Sign out</button>
        </div>
      );
    }
    return (
      <div id='auth'>
        {photo}
        {userInfo}
      </div>
    );
  }
}

export default Auth;
