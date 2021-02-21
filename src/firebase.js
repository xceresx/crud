import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC_nJweYOKCbH6APfqTeiuG53QJ_2NMZXU",
    authDomain: "crud-35fc3.firebaseapp.com",
    projectId: "crud-35fc3",
    storageBucket: "crud-35fc3.appspot.com",
    messagingSenderId: "456777452576",
    appId: "1:456777452576:web:7a72f8ac86aed501dbc045"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)