import { initializeApp } from "firebase/app";
import { getAndConfigAuth } from "./firebase-auth";
import { getAndConfigFirestore } from "./firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfVTuSBqZv4qbXJlaUH00r3tVlxQjA9JU",
  authDomain: "fir-playground-a7edc.firebaseapp.com",
  projectId: "fir-playground-a7edc",
  storageBucket: "fir-playground-a7edc.appspot.com",
  messagingSenderId: "709449037583",
  appId: "1:709449037583:web:b56c7d34fcd58b9b4ef07a",
};

export const app = initializeApp(firebaseConfig);
export const db = getAndConfigFirestore(app);
export const auth = getAndConfigAuth(app);
