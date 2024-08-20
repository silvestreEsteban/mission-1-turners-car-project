import './Upload.css'
import { useState, useRef } from 'react'
const API_KEY = import.meta.env.VITE_VISION_PREDICTION_KEY
const ENDPOINT = import.meta.env.VITE_VISION_PREDICTION_ENDPOINT



const ImageUploader = () => {
    
// image uploader , will call api to predict type of vehicle

// create function to recognize when url has been uploaded


 
    const [file, setFile] = useState('');
    const fileInputRef = useRef(null);
    const predictionResultRef = useRef(null);

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = fileInputRef.current.files[0];
        console.log({API_KEY})
        if (!file) {
            console.error("No file provided.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const arrayBuffer = event.target.result;

            fetch(
                ENDPOINT,
                {
                    method: "POST",
                    headers: {
                        "Prediction-Key": API_KEY,
                        "Content-Type": "application/octet-stream",
                    },
                    body: arrayBuffer // Use the arrayBuffer as the body
                }
            )
            .then(response => response.json())
            .then(data => {
                console.log("Prediction result:", data);
                if (data.predictions && data.predictions.length > 0) {
                    const firstPrediction = data.predictions[0];
                    console.log("First prediction tagName:", firstPrediction.tagName);
                    // Update the UI with the tagName
                    predictionResultRef.current.innerText = `Your vehicle type is: ${firstPrediction.tagName}`;
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        };

        reader.onerror = function(error) {
            console.error("Error reading file:", error);
        };

        reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
    };

    return (
        <>
            <div className='uploading-image-parent-div'>
                <div className='title-and-info'>
                    <h1 id='insurance-header'>Vehicle Insurance</h1>
                    <p id='insurance-paragraph'>Here at Turner's we are passionate about providing an honest and affordable insurance service. Please feel welcome to utilize our image recognition software to gauge what your insurance premium will look like.</p>
                </div>
                <div className='div-for-uploading-file'>
                    <form onSubmit={handleSubmit} method='post'>
                        <input id='file-input'type='file' ref={fileInputRef} onChange={handleChange} placeholder='image.jpg' />
                        <input type='submit' id="submit-button" />
                    </form>
                </div>
                <div className='showcase-info'>
                    <div id='showcase-info-image'>
                        <img src={file} alt='uploaded-img-of-car' id='image-preview' />
                    </div>
                    <div className='showcase-info-data'>
                        <h2>Vehicle Type Prediction</h2>
                        <h3>This is still in the testing phase so results may vary</h3>
                        <p ref={predictionResultRef}>{`Your vehicle type is: `}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageUploader;
