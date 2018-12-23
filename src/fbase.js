import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBctRoc_kh8An8W8RsDt7a0YBwD0Am0pj8",
    authDomain: "kept-data.firebaseapp.com",
    databaseURL: "https://kept-data.firebaseio.com",
    projectId: "kept-data",
    storageBucket: "kept-data.appspot.com",
    messagingSenderId: "492429388943"
  });


  const fbase = Rebase.createClass(firebaseApp.database());
  export {fbase, firebaseApp};
