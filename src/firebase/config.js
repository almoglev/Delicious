import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD80Sz6wHCMQbN-pn5NShvLnWDXLEJyxBc",
    authDomain: "delicious-webapp.firebaseapp.com",
    projectId: "delicious-webapp",
    storageBucket: "delicious-webapp.appspot.com",
    messagingSenderId: "858805213476",
    appId: "1:858805213476:web:b15a69e3569e2cf906fbb1"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
export const projectFirestore = firebase.firestore()