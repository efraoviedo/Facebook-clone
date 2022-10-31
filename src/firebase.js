import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdbmMiC1nHNGHNmH8d-dQtusiNG7UU_e0",
  authDomain: "facebook-clone-48984.firebaseapp.com",
  // databaseURL: "https://facebook-clone-48984.firebaseio.com",
  projectId: "facebook-clone-48984",
  storageBucket: "facebook-clone-48984.appspot.com",
  messagingSenderId: "72040187668",
  appId: "1:72040187668:web:57971f28d8c5d8080c2401",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
