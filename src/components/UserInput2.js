import { useState } from "react"

const UserInput2 = () => {
    const[data, SetData] =useState({
        firstname:'',
        lastname:'',
        course:''
    })
    const handleInput = (e) =>{
        const {name, value} = e.target;
        SetData((prev)=>{
            return {...prev, [name]: value}
        })
    }

    const handleSubmit=(e)=>{
    
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Firstname</label><br/>
            <input type="text" name="firstname" onChange={handleInput} placeholder="enter firstname"/><br/>

            <label>Lastname</label><br/>
            <input type="text" name="lastname" onChange={handleInput} placeholder="enter Lastname"/><br/>

            <label>Course</label><br/>
            <input type="text" name="course" onChange={handleInput} placeholder="Course"/><br/>
            </form>
        </div>
    )
}
//below 39-fail 40to49-D 50-59-c 60-69-B 70ABOVE-A
//system that adds 2 numbers 