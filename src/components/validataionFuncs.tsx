export function checkPasswordValidity(inputText: string): boolean {
    // Check for at least one capital letter
    const hasCapitalLetter = /[A-Z]/.test(inputText);

    // Check for at least one digit
    const hasDigit = /\d/.test(inputText);

    // Check for at least 8 characters
    const hasMinLength = inputText.length >= 8;

    // Return true if all conditions are satisfied
    return hasCapitalLetter && hasDigit && hasMinLength;

}

export function isValidEmail(email: string): boolean {
    if (email.includes(',')) {
        return false;
    }
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test if the email matches the regex pattern
    return emailRegex.test(email);
}

export function isValidValues(email: string, password: string): boolean {
    return !isValidEmail(email) || !checkPasswordValidity(password)
}

