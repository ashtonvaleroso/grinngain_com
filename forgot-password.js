import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHi24CNzn9pKwa2K4FTqEsniMD16BqL90",
    authDomain: "grinngain-8f9ea.firebaseapp.com",
    projectId: "grinngain-8f9ea",
    storageBucket: "grinngain-8f9ea.appspot.com",
    messagingSenderId: "580080243267",
    appId: "1:580080243267:web:26a34cd72ad757fc80faf6",
    measurementId: "G-CNS5GMHZVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const submit = document.getElementById('submit');
let email = document.getElementById('email').value;

submit.addEventListener('click', function (event) {
    event.preventDefault();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..
            alert('Password reset email sent!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
});