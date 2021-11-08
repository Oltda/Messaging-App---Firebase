import React, {useRef, useState} from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

import {useAuthState} from 'react-firebase-hooks/auth';



firebase.initializeApp({
  apiKey: "AIzaSyALJt5onPmmCLzhgzQtcLx72sQhHGFYpjA",
  authDomain: "firechat-5ae5e.firebaseapp.com",
  projectId: "firechat-5ae5e",
  storageBucket: "firechat-5ae5e.appspot.com",
  messagingSenderId: "461057559823",
  appId: "1:461057559823:web:047c8d5c75a9603031827a",
  measurementId: "G-WVFNSZR1D2"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>💬</h1>
        <SignOut auth={auth} />
      </header>

      <section>
        {user ? <ChatRoom analytics={analytics} firestore={firestore} auth={auth} /> : <SignIn auth={auth} />}
      </section>

    </div>
  );
}




export default App;