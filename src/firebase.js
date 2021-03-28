import firebase from 'firebase/app';
//import * as firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyCA3Sg-63h_h9n8fhwmeWBJLb0OKIZMNog",
    authDomain: "react-crud-c1418.firebaseapp.com",
    databaseURL: "https://react-crud-c1418-default-rtdb.firebaseio.com",
    projectId: "react-crud-c1418",
    storageBucket: "react-crud-c1418.appspot.com",
    messagingSenderId: "462715844015",
    appId: "1:462715844015:web:2b332e068f82a114a9eb5a"
  };
  // Initialize Firebase <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
