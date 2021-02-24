import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRwdsCSqggjlD_ifSfcSXIYHkkbA_zwyo",
  authDomain: "wootwitter-43063.firebaseapp.com",
  projectId: "wootwitter-43063",
  storageBucket: "wootwitter-43063.appspot.com",
  messagingSenderId: "280973022126",
  appId: "1:280973022126:web:2dd00ef707db4e2107ee3f",
  measurementId: "G-CTQMSQPSMR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
