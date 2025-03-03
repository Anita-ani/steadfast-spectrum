
// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeApitD8VT6vIT7IWhji9i3RkVYxjrBxA",
    authDomain: "security-compliance-76c92.firebaseapp.com",
    projectId: "security-compliance-76c92",
    storageBucket: "security-compliance-76c92.appspot.com",  // ✅ FIXED STORAGE BUCKET
    messagingSenderId: "516995159250",
    appId: "1:516995159250:web:ccda10e056c1485522890b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize Firebase Authentication

// Sign Up Function
export function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log("Signup Successful!", userCredential.user);
            alert("Signup Successful!");
        })
        .catch(error => {
            console.error(error.message);
            alert(error.message);
        });
}

// Login Function
export function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log("Login Successful!", userCredential.user);
            alert("Login Successful!");
        })
        .catch(error => {
            console.error(error.message);
            alert(error.message);
        });
}

// Logout Function
export function logout() {
    signOut(auth)
        .then(() => {
            console.log("User logged out.");
            alert("Logged out successfully!");
        })
        .catch(error => {
            console.error(error.message);
            alert(error.message);
        });
}

