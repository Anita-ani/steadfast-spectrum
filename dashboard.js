import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

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

// Check if user is authenticated
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("userEmail").textContent = user.email;
    } else {
        window.location.href = "login.html"; // Redirect if not logged in
    }
});

// Logout function
document.getElementById("logoutBtn").addEventListener("click", function () {
    signOut(auth)
        .then(() => {
            alert("Logged out successfully!");
            window.location.href = "login.html"; // Redirect to login
        })
        .catch(error => {
            alert(error.message);
        });
});

// Compliance Information by Industry
const complianceData = {
    finance: `
        <h3>Finance Compliance</h3>
        <ul>
            <li>🔹 **PCI DSS** - Payment security standards</li>
            <li>🔹 **GLBA** - Data protection for financial institutions</li>
            <li>🔹 **SOX** - Corporate financial record security</li>
        </ul>
    `,
    healthcare: `
        <h3>Healthcare Compliance</h3>
        <ul>
            <li>🔹 **HIPAA** - Protects patient medical data</li>
            <li>🔹 **HITECH** - Strengthens HIPAA enforcement</li>
            <li>🔹 **GDPR** - Protects EU citizens' health data</li>
        </ul>
    `,
    technology: `
        <h3>Technology Compliance</h3>
        <ul>
            <li>🔹 **ISO 27001** - Information Security Management</li>
            <li>🔹 **SOC 2** - Data security for cloud providers</li>
            <li>🔹 **NIST Framework** - Security guidelines for tech firms</li>
        </ul>
    `,
    education: `
        <h3>Education Compliance</h3>
        <ul>
            <li>🔹 **FERPA** - Student privacy protections</li>
            <li>🔹 **COPPA** - Children's online privacy</li>
            <li>🔹 **GDPR** - Covers student data for EU citizens</li>
        </ul>
    `,
    government: `
        <h3>Government Compliance</h3>
        <ul>
            <li>🔹 **FISMA** - Federal agency security requirements</li>
            <li>🔹 **NIST 800-53** - Security controls for federal agencies</li>
            <li>🔹 **GDPR** - Protects citizen data worldwide</li>
        </ul>
    `,
    retail: `
        <h3>Retail Compliance</h3>
        <ul>
            <li>🔹 **PCI DSS** - Payment card security</li>
            <li>🔹 **GDPR** - Consumer data protection</li>
            <li>🔹 **CCPA** - Privacy protections for California consumers</li>
        </ul>
    `
};

// Handle industry selection
document.getElementById("industrySelect").addEventListener("change", function () {
    const selectedIndustry = this.value;
    document.getElementById("complianceInfo").innerHTML = complianceData[selectedIndustry] || "<p>No compliance data available.</p>";
});