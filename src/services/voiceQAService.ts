import { SpeechRecognition } from 'web-speech-api'; // Importing a speech recognition library

class VoiceQAService {
    private recognition: SpeechRecognition;

    constructor() {
        this.recognition = new SpeechRecognition();
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';
    }

    startListening(callback: (transcript: string) => void) {
        this.recognition.start();

        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            callback(transcript);
        };

        this.recognition.onerror = (event) => {
            console.error('Error occurred in recognition: ' + event.error);
        };
    }

    stopListening() {
        this.recognition.stop();
    }

    async getAnswer(question: string): Promise<string> {
        // Placeholder for AI processing logic
        // This should interact with an AI service to get an answer based on the question
        const response = await fetch('/api/getAnswer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch answer');
        }

        const data = await response.json();
        return data.answer;
    }
}

export default new VoiceQAService();