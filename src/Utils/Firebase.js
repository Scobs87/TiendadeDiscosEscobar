// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyftHYVO3uz6bRJkQcVOapHzFRwj5kNcU",
  authDomain: "react-tienda-de-discos.firebaseapp.com",
  projectId: "react-tienda-de-discos",
  storageBucket: "react-tienda-de-discos.appspot.com",
  messagingSenderId: "340638118035",
  appId: "1:340638118035:web:5854708b28eaaa323b5d66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
