import React, { useState } from 'react';
import { aiSummaryService } from '../services/aiSummaryService';

const NoteUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {
            setUploadStatus('Uploading...');
            try {
                await aiSummaryService.uploadNotes(file);
                setUploadStatus('Upload successful!');
            } catch (error) {
                setUploadStatus('Upload failed. Please try again.');
            }
        } else {
            setUploadStatus('Please select a file to upload.');
        }
    };

    return (
        <div>
            <h2>Upload Your Notes</h2>
            <input type="file" accept=".txt,.pdf,.docx" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <p>{uploadStatus}</p>
        </div>
    );
};

export default NoteUpload;