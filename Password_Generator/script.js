document.addEventListener("DOMContentLoaded", function () {
  const lengthInput = document.getElementById("length");
  const uppercaseCheckbox = document.getElementById("uppercase");
  const lowercaseCheckbox = document.getElementById("lowercase");
  const numbersCheckbox = document.getElementById("numbers");
  const specialCharsCheckbox = document.getElementById("special-chars");
  const passwordInput = document.getElementById("password");
  const generateButton = document.getElementById("generate-btn");

  // Function to generate a random password
  function generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecialChars) {
    let charset = "";
    if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) charset += "0123456789";
    if (useSpecialChars) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (charset.length === 0) {
      alert("Please select at least one option for generating the password.");
      return "";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  }

  // Event listener for the Generate Password button
  generateButton.addEventListener("click", function () {
    const passwordLength = parseInt(lengthInput.value) || 12; // Default length is 12 characters
    const useUppercase = uppercaseCheckbox.checked;
    const useLowercase = lowercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSpecialChars = specialCharsCheckbox.checked;
    
    const generatedPassword = generatePassword(passwordLength, useUppercase, useLowercase, useNumbers, useSpecialChars);
    passwordInput.value = generatedPassword;
  });
});
