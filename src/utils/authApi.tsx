// src/utils/authApi.ts
export const simulateApiLogin = async (email: string, password: string): Promise<string> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate API response
    if (email === 'user@example.com' && password === 'password123') {
        return 'my-token-111111111'; // Replace with a real token
    } else {
        throw new Error('Invalid email or password');
    }
};
