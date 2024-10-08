import { createRoot } from 'react-dom/client';
import App from "./App";
import 'animate.css';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDz4Oj0F20LZtwEa7So_ovjPtkPN17ymWM",
//   authDomain: "coderreact-cd271.firebaseapp.com",
//   projectId: "coderreact-cd271",
//   storageBucket: "coderreact-cd271.appspot.com",
//   messagingSenderId: "523734897465",
//   appId: "1:523734897465:web:3fe5cb085402b2694a4ee8",
//   measurementId: "G-GNJRZC8MQR"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(<App/>)