import React, { useEffect, useState } from 'react';
import { createFlashcards } from '../services/flashcardService';
import { Flashcard } from '../types';

const Flashcards: React.FC = () => {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateFlashcards = async () => {
        setLoading(true);
        setError(null);
        try {
            const generatedFlashcards = await createFlashcards();
            setFlashcards(generatedFlashcards);
        } catch (err) {
            setError('Failed to generate flashcards. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGenerateFlashcards();
    }, []);

    return (
        <div>
            <h2>Flashcards</h2>
            {loading && <p>Loading flashcards...</p>}
            {error && <p>{error}</p>}
            <button onClick={handleGenerateFlashcards}>Regenerate Flashcards</button>
            <div>
                {flashcards.map((flashcard, index) => (
                    <div key={index} className="flashcard">
                        <p>{flashcard.question}</p>
                        <p>{flashcard.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Flashcards;