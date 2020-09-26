import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBeEqtExxrL0RLJUSuA-zUQxI2D5LEG-8E',
  authDomain: 'authentication-dfba4.firebaseapp.com',
  databaseURL: 'https://authentication-dfba4.firebaseio.com',
  projectId: 'authentication-dfba4',
  storageBucket: 'authentication-dfba4.appspot.com',
  messagingSenderId: '774575809885',
  appId: '1:774575809885:web:271c9eac11d320a03734b4',
  measurementId: 'G-TSX1Q0XSZX',
};

const Firebase = firebase.initializeApp(config);

export default Firebase;
