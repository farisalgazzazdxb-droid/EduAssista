import React, { useEffect, useState } from 'react';
import { getPracticeTests } from '../services/testService';

const PracticeTests: React.FC = () => {
    const [tests, setTests] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const fetchedTests = await getPracticeTests();
                setTests(fetchedTests);
            } catch (err) {
                setError('Failed to load practice tests.');
            } finally {
                setLoading(false);
            }
        };

        fetchTests();
    }, []);

    if (loading) {
        return <div>Loading practice tests...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Practice Tests</h2>
            {tests.length === 0 ? (
                <p>No practice tests available.</p>
            ) : (
                <ul>
                    {tests.map((test, index) => (
                        <li key={index}>
                            <h3>{test.title}</h3>
                            <p>{test.description}</p>
                            <button onClick={() => {/* Logic to start the test */}}>Start Test</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PracticeTests;