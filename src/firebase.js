import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBtNRWgQo2at9RSW59xCJic3QvfhVUUAko",
    authDomain: "disneyplus-clone-d1240.firebaseapp.com",
    projectId: "disneyplus-clone-d1240",
    storageBucket: "disneyplus-clone-d1240.appspot.com",
    messagingSenderId: "821078413326",
    appId: "1:821078413326:web:76ce7dbc8114e3933eec5f",
    measurementId: "G-QZCM2KN24W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();     
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;