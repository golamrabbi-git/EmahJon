// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEXdTQZi3hQm1IFCSgmxpevfG1dhtK_Zg",
  authDomain: "emah-jon-authentication.firebaseapp.com",
  projectId: "emah-jon-authentication",
  storageBucket: "emah-jon-authentication.appspot.com",
  messagingSenderId: "960531365461",
  appId: "1:960531365461:web:e8cabb7ae551d20c211edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;