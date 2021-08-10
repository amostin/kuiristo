import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyBCs8RWERQg_N-QCy1ip5ef3gsV0ZlCHYU',
  authDomain: 'kuiristo-amostin.firebaseapp.com',
  projectId: 'kuiristo-amostin',
  storageBucket: 'kuiristo-amostin.appspot.com',
  messagingSenderId: '420272069781',
  appId: '1:420272069781:web:df80cb0b271d4aa399cf9c',
  measurementId: 'G-C84C7NNJLF',
}

firebase.initializeApp(config)
