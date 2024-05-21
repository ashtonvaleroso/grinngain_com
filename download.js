import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
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



onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        document.body.style.display = 'block';
        // ...
    } else {
        // User is signed out
        // ...
        document.body.style.display = 'none';
        window.location.href = "early-access.html";
    }
});

const logout = document.getElementById('logout');

logout.addEventListener('click', function () {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert('Sign-out successful')
    }).catch((error) => {
        // An error happened.
        alert(error)
    });
    window.location.href = "early-access.html";
});