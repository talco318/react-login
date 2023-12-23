// src/utils/authApi.ts
export const simulateApiLogin = (email: string, password: string): Promise<any> => {
    const data = {
        email: email,
        password: password
    }
    return fetch('https://private-052d6-testapi4528.apiary-mock.com/authenticate', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });


};
