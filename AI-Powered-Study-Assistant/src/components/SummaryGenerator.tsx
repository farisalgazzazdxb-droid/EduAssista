import React, { useEffect, useState } from 'react';
import { fetchSummary } from '../services/aiSummaryService';

const SummaryGenerator: React.FC<{ noteId: string }> = ({ noteId }) => {
    const [summary, setSummary] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getSummary = async () => {
            try {
                const fetchedSummary = await fetchSummary(noteId);
                setSummary(fetchedSummary);
            } catch (err) {
                setError('Failed to fetch summary');
            } finally {
                setLoading(false);
            }
        };

        getSummary();
    }, [noteId]);

    if (loading) {
        return <div>Loading summary...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>AI-Generated Summary</h2>
            <p>{summary}</p>
        </div>
    );
};

export default SummaryGenerator;