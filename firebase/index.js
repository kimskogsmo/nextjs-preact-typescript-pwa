// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBB1l3nB16cSzQn9LDyyd-Pv_8UJ6H4yvg",
    authDomain: "accelor-82e4c.firebaseapp.com",
    projectId: "accelor-82e4c",
    storageBucket: "accelor-82e4c.appspot.com",
    messagingSenderId: "648534878783",
    appId: "1:648534878783:web:4bd4c00efb5e21f93f268a",
    measurementId: "G-B7NVV6P7K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = isSupported() ? getAnalytics(app) : null;
const auth = getAuth(app);

export {
    //analytics,
    auth
}