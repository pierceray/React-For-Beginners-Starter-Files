import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCrl91Tyhx-WuEFr4pgKMPRfWjKnejl_7U",
  authDomain: "catch-of-the-day-60818.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-60818.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

// This is a named export
export { firebaseApp };

export default base;
