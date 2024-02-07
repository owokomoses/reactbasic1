import { useState } from "react"

const ConditionalRendering =()=>{
    const[display, setDisplay]= useState(true);
    let output;
    if(display){
        return(
            <div>
                <h1>Display is true this line is displayed.</h1>
            </div>
        )
    }else{
        return(
            <div>
                <h1>Display is false:</h1>
            </div>
        )
    }
    
    //Ternary Conditional
    return display?
    (<div>
    Display is true this line is displayed.
    </div>
    ):(
    <div>
        <h1>Display is false:</h1>
    </div>
    );

    //condition rendering using elements
    if(display){
    output = <h1>Display is true thid line is displayed</h1>
    }else{
    output = <h1>Display is false</h1>
    }


}





export default ConditionalRendering;