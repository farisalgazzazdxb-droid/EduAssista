import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tests';

export const generatePracticeTest = async (notesId: string) => {
    try {
        const response = await axios.post(`${API_URL}/generate`, { notesId });
        return response.data;
    } catch (error) {
        console.error('Error generating practice test:', error);
        throw error;
    }
};

export const fetchPracticeTests = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching practice tests:', error);
        throw error;
    }
};