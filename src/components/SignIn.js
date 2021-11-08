import React, {useRef, useState} from 'react';
import firebase from 'firebase/compat/app';

function SignIn(props) {
    let auth = props.auth
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      
      </>
    )
  
  }

  export default SignIn;