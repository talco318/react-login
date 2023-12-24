function checkPasswordValidity(inputText: string): boolean {
    // Check for at least one capital letter
    const hasCapitalLetter = /[A-Z]/.test(inputText);

    // Check for at least one digit
    const hasDigit = /\d/.test(inputText);

    // Check for at least 8 characters
    const hasMinLength = inputText.length >= 8;

    // Return true if all conditions are satisfied
    return hasCapitalLetter && hasDigit && hasMinLength;

}

function isValidEmail(email: string): boolean {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test if the email matches the regex pattern
    return emailRegex.test(email);
}

export function isValidValues(email: string, password: string): boolean {
    console.log(email);
    console.log("email is valid?");
    console.log(isValidEmail(email));
    console.log(password);
    console.log("password is valid?");
    console.log(checkPasswordValidity(password));

    return !isValidEmail(email) || !checkPasswordValidity(password)
}

