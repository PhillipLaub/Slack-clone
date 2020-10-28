// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCq44wst2nUnkKHW29W0ITHXGDg4I5ARBg",
  authDomain: "slack-clone-42b76.firebaseapp.com",
  databaseURL: "https://slack-clone-42b76.firebaseio.com",
  projectId: "slack-clone-42b76",
  storageBucket: "slack-clone-42b76.appspot.com",
  messagingSenderId: "815675675757",
  appId: "1:815675675757:web:b085cf53ed5d6035b99b64",
  measurementId: "G-3ZS6HS7Z1Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
