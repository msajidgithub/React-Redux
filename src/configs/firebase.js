import * as firebase from  'firebase/app';
import  'firebase/auth';
import   'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyBlvFbITs0ML8VrbDdMtlBNwCsvrkW5cpE",
    authDomain: "authbmj.firebaseapp.com",
    databaseURL: "https://authbmj.firebaseio.com",
    projectId: "authbmj",
    storageBucket: "authbmj.appspot.com",
    messagingSenderId: "117631402545",
    appId: "1:117631402545:web:357e2ceee1eb581b21cb10",
    measurementId: "G-0Q90C681HS"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;