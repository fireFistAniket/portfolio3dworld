// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg9aQP7OoIHfU3YwzYoCfV5_3uPOpgLQE",
  authDomain: "dportfolio-b5697.firebaseapp.com",
  projectId: "dportfolio-b5697",
  storageBucket: "dportfolio-b5697.appspot.com",
  messagingSenderId: "584008232764",
  appId: "1:584008232764:web:91c30c0214dce4e38d3839",
  measurementId: "G-SP4FRLJBJE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const dataStore = getFirestore(app);

export { dataStore, collection, addDoc };
