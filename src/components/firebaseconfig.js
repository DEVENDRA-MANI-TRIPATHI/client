// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyANibIQz9K-ED7fUbs1Z4axvjLM_U_Goo0",
  authDomain: "weather-man-cf43e.firebaseapp.com",
  databaseURL: "https://weather-man-cf43e-default-rtdb.firebaseio.com",
  projectId: "weather-man-cf43e",
  storageBucket: "weather-man-cf43e.appspot.com",
  messagingSenderId: "633514397507",
  appId: "1:633514397507:web:9ed22b2766d17005fd29f6",
  measurementId: "G-L4Z6KT1KDE"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database,auth };
