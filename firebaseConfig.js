import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2Odl_UbD_M2ZlqRqnXOJQWy3fa5kDXpk",
  authDomain: "jyotishmvp.firebaseapp.com",
  projectId: "jyotishmvp",
  storageBucket: "jyotishmvp.appspot.com",
  messagingSenderId: "899431521208",
  appId: "1:899431521208:web:a0a91c3721614012188d4d"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };