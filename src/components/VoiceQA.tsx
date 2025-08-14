import React, { useEffect, useState } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';
import { getAnswer } from '../services/voiceQAService';

const VoiceQA: React.FC = () => {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [answer, setAnswer] = useState<string | null>(null);

    const handleVoiceInput = () => {
        if (transcript) {
            getAnswer(transcript).then(response => {
                setAnswer(response);
                resetTranscript();
            });
        }
    };

    useEffect(() => {
        if (transcript) {
            handleVoiceInput();
        }
    }, [transcript]);

    return (
        <div>
            <h2>Voice Q&A</h2>
            <p>Ask your question:</p>
            <div>{transcript}</div>
            <div>
                <button onClick={resetTranscript}>Reset</button>
            </div>
            {answer && (
                <div>
                    <h3>Answer:</h3>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default VoiceQA;