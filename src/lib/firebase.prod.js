import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBDJxZYSrQvj7C13FYj2XIK0ZsG9kQ_1v0",
    authDomain: "netflix-bbf0c.firebaseapp.com",
    databaseURL: "https://netflix-bbf0c.firebaseio.com",
    projectId: "netflix-bbf0c",
    storageBucket: "netflix-bbf0c.appspot.com",
    messagingSenderId: "199656088682",
    appId: "1:199656088682:web:64ca7f8be0f855201a5613"
  };

  const firebase = Firebase.initializeApp(config);


  export {firebase};