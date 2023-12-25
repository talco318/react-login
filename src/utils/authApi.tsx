// src/utils/authApi.ts
import axios from "axios";

export const apiLogin = (email: string, password: string): Promise<any> => {
    const data = {
        email: email,
        password: password
    }
    return fetch('http://localhost:3001/login', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });
};


export const fetchProjects = async (tkn: string) => {
    try {
        const response = await axios.get('http://localhost:3001/projects', {
            headers: {
                Authorization: `Bearer {{${tkn}}}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error; // Re-throw the error to handle it in the component
    }
};