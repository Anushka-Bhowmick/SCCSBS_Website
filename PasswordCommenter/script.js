const passwordInput = document.getElementById("password-input");
const evaluateButton = document.getElementById("evaluate-button");
const strengthResult = document.getElementById("strength-result");

// Function to evaluate password strength
function evaluatePasswordStrength(password) {
    const length = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    let strength = 0;

    if (length >= 8) strength++;
    if (hasUppercase) strength++;
    if (hasLowercase) strength++;
    if (hasNumber) strength++;
    if (hasSpecialChar) strength++;

    return strength;
}

// Function to provide humorous feedback
function provideFeedback(strength) {
    const feedback = [
        "You call that a password? Even a goldfish could crack that.",
        "Hmm... Your password could use some improvement.",
        "Not bad, but it's still like leaving your front door unlocked.",
        "That's a decent password, but hackers might still guess it.",
        "Impressive! You've got a password that even your cat couldn't guess."
    ];

    return feedback[strength - 1]; // Fixed index out of bounds error
}

// Event listener for the evaluate button
evaluateButton.addEventListener("click", () => {
    const password = passwordInput.value.trim();
    if (password === "") {
        strengthResult.textContent = "Please enter a password.";
        return;
    }

    const strength = evaluatePasswordStrength(password);
    const feedback = provideFeedback(strength);

    strengthResult.textContent = feedback;
});
