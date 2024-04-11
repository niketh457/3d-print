// src/FileUpload.js

import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await axios.post('http://localhost:3000/upload', formData)

                if (response.ok) {
                    const data = await response.json();
                    onFileUpload(data); // Handle response from the backend
                } else {
                    console.error('Failed to upload file');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    return (
        <div>
            <h2>Upload STL File</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept=".stl" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default FileUpload;
