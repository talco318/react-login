import axios from "axios";

// src/utils/authApi.ts
export const apiLogin = (email: string, password: string): Promise<any> => {
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

export const apiTableData = async (token: string): Promise<any> => {
    try {
        const response = await axios.get('https://private-052d6-testapi4528.apiary-mock.com/info', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data; // Assuming you want to return the data from the response
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to handle it outside this function if needed
    }
};