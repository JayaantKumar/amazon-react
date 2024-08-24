// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_6umLGWRrVgH9uWR0Xc_oe6bJZPhPGyE",
    authDomain: "clone-3c216.firebaseapp.com",
    projectId: "clone-3c216",
    storageBucket: "clone-3c216.appspot.com",
    messagingSenderId: "236306703239",
    appId: "1:236306703239:web:4b8ee0e2be624d6d362922",
    measurementId: "G-NXRSCTZY8W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };  
