import axios from 'axios';

const AI_SUMMARY_API_URL = 'https://api.example.com/generate-summary'; // Replace with actual API endpoint

export const generateSummary = async (notes: string): Promise<string> => {
    try {
        const response = await axios.post(AI_SUMMARY_API_URL, { notes });
        return response.data.summary;
    } catch (error) {
        console.error('Error generating summary:', error);
        throw new Error('Failed to generate summary');
    }
};