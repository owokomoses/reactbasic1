import React from 'react'

let students = [
    {id: 1, name:"John", Course:"Full-Stack"},
    {id: 2, name:"Mary", Course:"Cyber Security"},
    {id: 3, name:"Samuel", Course:"Database"},
    {id: 4, name:"Susan", Course:"Full-Stack"},
    {id: 5, name:"Susan", Course:"Full-Stack"},
];

const Maps = () => {
let studentList = students.map((student)=>(
    <h1 key={student.id}>{student.name}, {student.Course}</h1>
))
return(
    <div>
        {studentList}
    </div>
)
}

export default Maps;