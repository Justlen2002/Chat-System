import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDKBdymmjMAd8xu2-Ivpt0nkqMokw5s5UM",
  authDomain: "chat-system-cd0bf.firebaseapp.com",
  projectId: "chat-system-cd0bf",
  storageBucket: "chat-system-cd0bf.appspot.com",
  messagingSenderId: "784877902591",
  appId: "1:784877902591:web:5d16b23187c867a7974aca",
  measurementId: "G-B5X6Y08K8J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
