import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBTbPzUKMEJwgrXVWvFQyDFhThMbgX5cbs",
  authDomain: "udemy-auth-learning.firebaseapp.com",
  projectId: "udemy-auth-learning",
  storageBucket: "udemy-auth-learning.appspot.com",
  messagingSenderId: "409133570692",
  appId: "1:409133570692:web:9958d4098531ba38ac80d1",
  measurementId: "G-3WJTJZHHP4"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const store = firebase.storage()

export {db, auth, store}