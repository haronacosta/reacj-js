import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB7ua-jMgE8T0z8tqxedUV75iTK1qrmCoE',
  authDomain: 'react-app-c68aa.firebaseapp.com',
  projectId: 'react-app-c68aa',
  storageBucket: 'react-app-c68aa.appspot.com',
  messagingSenderId: '379500736216',
  appId: '1:379500736216:web:7dd8e687056edfeb7fb1ad'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
