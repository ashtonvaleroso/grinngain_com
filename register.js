// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    getRedirectResult,
    GoogleAuthProvider,
    FacebookAuthProvider,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { isSignIn } from "./early-access.js";
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
const analytics = getAnalytics(app);
const gprovider = new GoogleAuthProvider();
const fprovider = new FacebookAuthProvider();
const auth = getAuth();
const submit = document.getElementById('submit');

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        window.location.href = "download.html";
        // ...
    } else {
        document.body.style.display = 'block';
    }
});

submit.addEventListener('click', function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirm_password = document.getElementById('confirm-password').value
    if (isSignIn) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                window.location.href = 'download.html';
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
    else {
        if (password == confirm_password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    window.location.href = 'download.html';
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                    // ..
                })
        } else {
            alert('Passwords do not match')
        }
    }
});

let googleButton = document.getElementById('google-signin');
let facebookButton = document.getElementById('facebook-signin');

document.addEventListener('DOMContentLoaded', function () {
    getRedirectResult(auth)
        .then((result) => {
            if (result !== null) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                let credential;
                const signInType = localStorage.getItem('signInType');
                if (signInType === 'google') {
                    credential = GoogleAuthProvider.credentialFromResult(result);
                } else if (signInType === 'facebook') {
                    credential = FacebookAuthProvider.credentialFromResult(result);
                }
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                window.location.href = 'download.html';
            }
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData ? error.customData.email : null;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            alert(errorMessage);
        });
});


googleButton.addEventListener('click', function () {
    localStorage.setItem('signInType', 'google');
    signInWithRedirect(auth, gprovider);
    signInType = 'google';
});
facebookButton.addEventListener('click', function () {
    localStorage.setItem('signInType', 'facebook');
    signInWithRedirect(auth, fprovider);
    signInType = 'facebook';
});

