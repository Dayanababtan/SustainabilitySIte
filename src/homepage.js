import React from 'react';
import './homepage.css';

const Homepage = () => {
    const questions = [
        {
            question: "How many miles did you drive in the last 7 days?",
            image: "car.jpg", // Assume you have this image in your public/assets folder
            explanation: "Driving contributes to emissions due to fuel combustion. Reducing miles can decrease your carbon footprint."
        },
        {
            question: "How many times did you order food online?",
            image: "delivery.jpeg",
            explanation: "Online orders add to carbon footprint due to packaging waste and delivery emissions."
        },
        {
            question: "How many flights did you take in the last week?",
            image: "airplane.jpg",
            explanation: "Air travel generates high CO₂ emissions per mile. Limiting flights significantly reduces personal carbon impact."
        },
        // Add more questions as needed
    ];

    return (
        <div className="homepage">
            {/* Header */}
            <header className="header">
                <h1 className="app-name">Sustainable Life</h1>
                <p className="tagline">Track and Reduce Your Carbon Footprint</p>
            </header>

            {/* Introduction */}
            <section className="intro-section">
                <h2>Calculate Your Carbon Impact Over the Last Week</h2>
                <p>Enter your activity details below to get an estimate of your carbon footprint.</p>
                <button className="start-button">Start Calculating</button>
            </section>

            {/* Questions Section */}
            <section className="questions-section">
                {questions.map((item, index) => (
                    <div key={index} className="question-block">
                        <h3 className="question">{item.question}</h3>
                        <input type="number" className="input-field" placeholder="Enter number" />
                        <div className="image-explanation">
                            <img src={`assets/${item.image}`} alt="" className="question-image" />
                            <p className="explanation">{item.explanation}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Calculate Button */}
            <section className="calculate-section">
                <button className="calculate-button">Calculate My Impact</button>
            </section>
        </div>
    );
};

export default Homepage;
