import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBiJKrwlUF-wxA5QREYFOAPxEvRaJ20bRg",
    authDomain: "chatbox-fa7c3.firebaseapp.com",
    projectId: "chatbox-fa7c3",
    storageBucket: "chatbox-fa7c3.appspot.com",
    messagingSenderId: "758294911566",
    appId: "1:758294911566:web:10f566e17ebeed6799011f"
  };

  const app = firebase.initializeApp(firebaseConfig)

  const db = app.firestore()
  const auth = app.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }