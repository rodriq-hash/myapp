import { useState } from "react";
const Thirdcomponent=()=>{
    // declare state variables 
    const [number,setNumber]=useState(40)
    // create function to update number 
    const updatenumber=()=>{
        setNumber(number*55578)
    }
    const [marks,setMarks]=useState(60)
    const updatemarks=()=>{
        setMarks(marks*2)
    }
    // call the update number function 
    return(
        <div>
            <h1>Understending React Hooks</h1>
            <h2>The current value is : {number}</h2>
            <h2>the current value is:{marks}</h2>
            <button onClick={updatenumber}>update the number</button>
             <button onClick={updatemarks}>update the marks</button>
        </div>
    )
}
export default Thirdcomponent