import { useState } from "react";

const Sample = () => {
    const [name, setName]= useState("John Doe");

    const changeName =() =>{
        setName("Mary Doe");
    }
    return (
        <div>
            <h1>My name is {name}</h1>
            <button onClick={changeName}> change name </button>
        </div>
    );
}

export default Sample;