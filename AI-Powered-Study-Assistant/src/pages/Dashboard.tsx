import React from 'react';
import NoteUpload from '../components/NoteUpload';
import SummaryGenerator from '../components/SummaryGenerator';
import Flashcards from '../components/Flashcards';
import PracticeTests from '../components/PracticeTests';
import VoiceQA from '../components/VoiceQA';
import StudyPlanGenerator from '../components/StudyPlanGenerator';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <NoteUpload />
            <SummaryGenerator />
            <Flashcards />
            <PracticeTests />
            <VoiceQA />
            <StudyPlanGenerator />
        </div>
    );
};

export default Dashboard;