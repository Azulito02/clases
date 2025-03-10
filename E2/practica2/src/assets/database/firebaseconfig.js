// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr7pTesPaRylZogIQ-uskkzZO_SJvVSZE",
  authDomain: "prueba2-a0f69.firebaseapp.com",
  projectId: "prueba2-a0f69",
  storageBucket: "prueba2-a0f69.firebasestorage.app",
  messagingSenderId: "768476110306",
  appId: "1:768476110306:web:b2d824c8fdcda3383b2dbb",
  measurementId: "G-0FRPXZEB3N"
};

const appfirebase =initializeApp(firebaseConfig);

const db = getFirestore(appfirebase)

const auth = getAuth(appfirebase)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {appfirebase, db, auth};