import { useEffect, useState } from "react"


const UseEffect = ()=>{
    const[name, setName]= useState('John Doe');
    const[name1, setName1]= useState('John Doe');

    useEffect(()=>{
        console.log('Use Effect called');
    },[name])
    return(
        <div>
            <h1>{name}</h1>
            <h1>{name1}</h1>
            <button onClick={()=>setName('Mary Doe')}>changeName</button>
            <button onClick={()=>setName('Samson Doe')}>Click me</button>
        </div>
    )
}