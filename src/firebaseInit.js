import firebase from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBa0Da5ODX16bbnXcXvErDYHeWE0ttHqQI",
  authDomain: "vuestorage-enes.firebaseapp.com",
  projectId: "vuestorage-enes",
  storageBucket: "vuestorage-enes.appspot.com",
  messagingSenderId: "476983967465",
  appId: "1:476983967465:web:f0acdd9ab00a9dde547a78",
  measurementId: "G-HDCW2EDXFC"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);