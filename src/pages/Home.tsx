import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the AI-Powered Study Assistant</h1>
            <p>Your personal study companion that helps you learn smarter!</p>
            <h2>Features:</h2>
            <ul>
                <li>Upload your notes for AI-generated summaries</li>
                <li>Create flashcards for effective revision</li>
                <li>Generate practice tests to assess your knowledge</li>
                <li>Use voice-based Q&A for hands-free studying</li>
                <li>Get personalized study plans based on your deadlines</li>
            </ul>
            <div className="navigation">
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Go to Dashboard</Link>
            </div>
        </div>
    );
};

export default Home;