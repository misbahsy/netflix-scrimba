import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: "AIzaSyDt1iAVc9TKf9buK7BdJCxeSVU5Ekn13Xs",
  authDomain: "scrimba-netflix.firebaseapp.com",
  databaseURL: "https://scrimba-netflix.firebaseio.com",
  projectId: "scrimba-netflix",
  storageBucket: "scrimba-netflix.appspot.com",
  messagingSenderId: "472711657678",
  appId: "1:472711657678:web:02feb594da1b3e5bdb789f"
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);