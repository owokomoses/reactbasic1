import React, { useState } from 'react';

const Calc2 = () => {
const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);
const [result, setResult] = useState(0);

const handleNum1Change = (e) => {
    setNum1(parseInt(e.target.value));
};

const handleNum2Change = (e) => {
    setNum2(parseInt(e.target.value));
};

const handleAddition = () => {
    setResult(num1 + num2);
};

return (
    <div>
    <label>
        Num 1: <input type="number" value={num1} onChange={handleNum1Change} />
    </label>
    <br />
    <label>
        Num 2: <input type="number" value={num2} onChange={handleNum2Change} />
    </label>
    <br />
    <button onClick={handleAddition}>Add</button>
    <br />
    <p>Result: {result}</p>
    </div>
);
};

export default Calc2;
