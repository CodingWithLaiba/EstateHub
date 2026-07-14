// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estatehub-52.firebaseapp.com",
  projectId: "estatehub-52",
  storageBucket: "estatehub-52.firebasestorage.app",
  messagingSenderId: "1040382502053",
  appId: "1:1040382502053:web:d53c05d6860094c455d94c",
  measurementId: "G-11XLYLGX8D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);