import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 

const firebaseConfig = {
  apiKey: "AIzaSyDlOwrA7UQtLXDG9YhTSyf3uJLFiLK_sO0",
  authDomain: "estadistica-58631.firebaseapp.com",
  projectId: "estadistica-58631",
  storageBucket: "estadistica-58631.appspot.com",
  messagingSenderId: "579848519814",
  appId: "1:579848519814:web:e9584f0eb34adfa9579107",
  measurementId: "G-VQ33QY5REY"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;