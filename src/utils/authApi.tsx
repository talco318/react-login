import axios from "axios";

// src/utils/authApi.ts
export const apiLogin = (email: string, password: string): Promise<any> => {
    const data = {
        email: email,
        password: password
    }
    // return fetch('https://private-052d6-testapi4528.apiary-mock.com/authenticate', {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {'Content-Type': 'application/json'}
    // });
    return fetch('http://localhost:3001/login', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });


};


export const fetchProjects = async (tkn: string) => {
    try {
        // const response = await axios.get('https://private-052d6-testapi4528.apiary-mock.com/info', {
        //     headers: {
        //         Authorization: `Bearer ${tkn}`,
        //     },
        // });
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