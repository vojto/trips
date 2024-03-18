import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBv8s_D1dtwZXzt4UBBe9fpvrTQo2dq58",
  authDomain: "trips-a8392.firebaseapp.com",
  projectId: "trips-a8392",
  storageBucket: "trips-a8392.appspot.com",
  messagingSenderId: "443503021041",
  appId: "1:443503021041:web:9c99b1f647a3f80c37d250",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
