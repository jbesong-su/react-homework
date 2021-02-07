import firebase from 'firebase'; 

const firebaseAuth = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyD9lRjtS3GzJaluNPPLF7Hnfk07-Oq_Z0Y",
    authDomain: "clone-29d3a.firebaseapp.com",
    projectId: "clone-29d3a",
    storageBucket: "clone-29d3a.appspot.com",
    messagingSenderId: "861727708736",
    appId: "1:861727708736:web:7a7d61ee68907bafb331a5",
    measurementId: "G-D4XDMCF1B9"
  }); 

const db = firebaseApp.firestore(); 
const auth = firebaseAuth.auth(); 

export {db, auth}; 