import { useState } from "react";

const UserInput = () => {
    const[Firstname, setFirstname]= useState("");
    const [Lastname, setLastname] = useState("");
    const[Course, setCourse]=useState("");

    return(
        <div>
            <form>
                <label>Firstname</label><br/>
                <input type="text" name="firstname" value={Firstname} required onChange={(e)=>setFirstname(e.target.value)} placeholder="enter firstname"/><br/>

                <label>Lastname</label><br/>
                <input type="text" name="lastname" value={Lastname} required onChange={(e)=>setLastname(e.target.value)} placeholder="enter lastname"/><br/>

                <label>Course</label><br/>
                <input type="text" name="course" value={Course} required onChange={(e)=>setCourse(e.target.value)} placeholder="enter course"/><br/>

                <button>Save Details</button>
                <p>{Firstname}</p>
                <p>{Lastname}</p>
                <p>{Course}</p>
            </form>
        </div>
    )
}

export default UserInput;