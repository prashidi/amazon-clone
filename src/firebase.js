import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcTaoTYDC08dWb5WF0ebrME3LwPnNNtsk",
  authDomain: "zaio--clone.firebaseapp.com",
  projectId: "zaio--clone",
  storageBucket: "zaio--clone.appspot.com",
  messagingSenderId: "704023850111",
  appId: "1:704023850111:web:5476850357107ea486a34a",
  measurementId: "G-81BWJ74K13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
