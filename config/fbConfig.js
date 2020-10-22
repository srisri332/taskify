import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBDpk0q3oGb24zUIeFgdbZEBudeymWCizM",
  authDomain: "taskify-d94cf.firebaseapp.com",
  databaseURL: "https://taskify-d94cf.firebaseio.com",
  projectId: "taskify-d94cf",
  storageBucket: "taskify-d94cf.appspot.com",
  messagingSenderId: "803978375796",
  appId: "1:803978375796:web:dadd735397581e19511721",
  measurementId: "G-ZWVF3C7HRH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshot: true });
export default firebase;
