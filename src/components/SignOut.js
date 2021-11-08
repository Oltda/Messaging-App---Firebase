import React, {useRef, useState} from 'react';
import firebase from 'firebase/compat/app';


function SignOut(props) {

    let auth = props.auth

    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }

export default SignOut;
  