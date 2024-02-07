import React, { useState } from 'react';

const GradeCalculator = () => {
const [score, setScore] = useState(0);
const [grade, setGrade] = useState('');

const calculateGrade = (score) => {
    if (score < 40) {
    return 'Fail';
    } else if (score >= 40 , score <= 49) {
    return 'D';
    } else if (score >= 50 , score <= 59) {
    return 'C';
    } else if (score >= 60 , score <= 69) {
    return 'B';
    } else if(score >= 70 , score <= 100){
    return 'A';
    }else{
        alert("Invalid Score");
    }
};

    const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setScore(value);
    setGrade(calculateGrade(value));
};

return (
    <div>
    <h2>Grade Calculator</h2>
    <label>
        Enter Score: <input type="number" value={score} onChange={handleInputChange} />
    </label>
    <br />
    <p>Grade: {grade}</p>
    </div>
);
};

export default GradeCalculator;
