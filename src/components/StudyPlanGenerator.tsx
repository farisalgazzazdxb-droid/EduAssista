import React, { useState, useEffect } from 'react';
import { generateStudyPlan } from '../services/studyPlanService';
import { StudyPlan } from '../types';

const StudyPlanGenerator: React.FC = () => {
    const [deadlines, setDeadlines] = useState<string>('');
    const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGeneratePlan = async () => {
        setLoading(true);
        setError(null);
        try {
            const plan = await generateStudyPlan(deadlines);
            setStudyPlan(plan);
        } catch (err) {
            setError('Failed to generate study plan. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Study Plan Generator</h2>
            <textarea
                value={deadlines}
                onChange={(e) => setDeadlines(e.target.value)}
                placeholder="Enter your deadlines here..."
            />
            <button onClick={handleGeneratePlan} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Study Plan'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {studyPlan && (
                <div>
                    <h3>Your Study Plan:</h3>
                    <pre>{JSON.stringify(studyPlan, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default StudyPlanGenerator;