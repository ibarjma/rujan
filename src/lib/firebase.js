import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
// input the seed file
// call the seed only once!

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyA_9j0YTA3tRZ15MzrA2Wwo_-swaJgO8uo',
  authDomain: 'rujan1.firebaseapp.com',
  databaseURL: 'https://rujan1-default-rtdb.firebaseio.com',
  projectId: 'rujan1',
  storageBucket: 'rujan1.appspot.com',
  messagingSenderId: '151625312313',
  appId: '1:151625312313:web:3e55bcc85ca677e2d445e8',
  measurementId: 'G-1KWCT519J7',
}
const firebase = Firebase.initializeApp(config)
const storage = firebase.storage()
const { FieldValue } = Firebase.firestore

// seedDatabase(firebase);

export { firebase, FieldValue, storage }
