document.addEventListener("DOMContentLoaded", () => {
    const quizBox = document.getElementById("quiz-box");
    const resultBox = document.getElementById("result-box");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextBtn = document.getElementById("next-btn");
    const retryBtn = document.getElementById("retry-btn");
    const scoreText = document.getElementById("score-text");

    let currentQuestionIndex = 0;
    let score = 0;
    let answered = false;

    const quizQuestions = [
        { question: "What does MFA stand for in cybersecurity?", options: ["Multiple Firewall Access", "Multi-Factor Authentication", "Malware File Analysis", "Mainframe Application"], correct: 1 },
        { question: "Which of these is an example of a strong password?", options: ["123456", "password", "Q!t7$5jLp", "admin"], correct: 2 },
        { question: "Which protocol is used for encrypting web traffic?", options: ["HTTP", "FTP", "TLS", "SMTP"], correct: 2 },
        { question: "What is the primary purpose of a firewall?", options: ["To prevent overheating of computers", "To block all incoming traffic", "To monitor and control network traffic", "To encrypt all emails"], correct: 2 },
        { question: "Which of the following is a social engineering attack?", options: ["Phishing", "DDoS", "SQL Injection", "Brute Force"], correct: 0 },
        { question: "What does the acronym VPN stand for?", options: ["Virtual Protected Network", "Verified Private Node", "Virtual Private Network", "Visible Protocol Net"], correct: 2 },
        { question: "Which security principle ensures that data is only accessible to authorized users?", options: ["Availability", "Confidentiality", "Integrity", "Non-repudiation"], correct: 1 },
        { question: "What type of malware is designed to spread from system to system without human intervention?", options: ["Virus", "Trojan", "Worm", "Ransomware"], correct: 2 },
        { question: "Which of these is NOT a common security measure for protecting cloud environments?", options: ["Encryption", "Firewalls", "Load Balancers", "Multi-Factor Authentication"], correct: 2 },
        { question: "What is the main function of an Intrusion Detection System (IDS)?", options: ["Blocking incoming attacks", "Detecting and alerting about potential threats", "Encrypting network traffic", "Filtering spam emails"], correct: 1 },
        { question: "Which regulation is designed to protect the personal data of European Union citizens?", options: ["HIPAA", "PCI-DSS", "GDPR", "ISO 27001"], correct: 2 },
        { question: "What is the purpose of a honeypot in cybersecurity?", options: ["A tool for monitoring network speed", "A trap for detecting unauthorized access", "A type of firewall", "A secure password manager"], correct: 1 }
    ];

    function loadQuestion() {
        answered = false;
        nextBtn.disabled = true;
        let q = quizQuestions[currentQuestionIndex];
        questionText.textContent = q.question;
        optionsContainer.innerHTML = "";

        q.options.forEach((option, index) => {
            let button = document.createElement("button");
            button.classList.add("option-btn");
            button.textContent = option;
            button.addEventListener("click", () => selectAnswer(index));
            optionsContainer.appendChild(button);
        });
    }

    function selectAnswer(selectedIndex) {
        if (answered) return;
        answered = true;
        let correctIndex = quizQuestions[currentQuestionIndex].correct;
        let buttons = document.querySelectorAll(".option-btn");

        buttons.forEach((btn, index) => {
            if (index === correctIndex) {
                btn.classList.add("correct");
            } else if (index === selectedIndex) {
                btn.classList.add("incorrect");
            }
            btn.disabled = true;
        });

        if (selectedIndex === correctIndex) {
            score++;
        }

        nextBtn.disabled = false;
    }

    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    });

    function showResults() {
        quizBox.classList.add("hidden");
        resultBox.classList.remove("hidden");
        scoreText.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
    }

    retryBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        quizBox.classList.remove("hidden");
        resultBox.classList.add("hidden");
        loadQuestion();
    });

    loadQuestion();
});
