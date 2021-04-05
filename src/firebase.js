import firebase from 'firebase'
import "firebase/auth"
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBVO74T-flp5XvYB5wsABo4B8ClMCQaWgM",
  authDomain: "netflix2-1ca7e.firebaseapp.com",
  projectId: "netflix2-1ca7e",
  storageBucket: "netflix2-1ca7e.appspot.com",
  messagingSenderId: "1044688737713",
  appId: "1:1044688737713:web:8af984e1df516b46871990"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export { auth } ; 
export default db ;