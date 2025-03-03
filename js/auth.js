
// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// Show Forgot Password Modal
document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("forgotPasswordModal").style.display = "flex";
});

// Close Modal
document.querySelector(".close-modal").addEventListener("click", function () {
    document.getElementById("forgotPasswordModal").style.display = "none";
});

// Handle Forgot Password Submission
document.getElementById("forgotPasswordForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const resetEmail = document.getElementById("resetEmail");
    const errorMessage = resetEmail.nextElementSibling;
    
    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(resetEmail.value.trim())) {
        errorMessage.textContent = "Please enter a valid email address";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";

    // Simulate sending email
    setTimeout(() => {
        alert("A password reset link has been sent to your email!");
        document.getElementById("forgotPasswordModal").style.display = "none";
    }, 2000);
});


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle User Registration
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("Registration Successful! Redirecting to login...");
            window.location.href = "login.html";
        })
        .catch(error => {
            alert(error.message);
        });
});
