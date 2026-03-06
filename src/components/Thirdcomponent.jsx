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
    const[school,setSchool]=useState("Modcom")
    const[name,setName]=useState("Juliet")
    const [city,setCity]=useState('Kigali')
    const [age,setAge]=useState(20)
    // call the update number function 
    // function to update school 
    const updateschool=()=>{
        setSchool("Nairobi University")
    }
    // function to update the name 
    const updatename=()=>{
        setName("Benjamin")
    }
    // function to update the city 
    const updatecity=()=>{
        setCity('Bamako')
    }
    // function to update age 
    const updateage=()=>{
        setAge(40)
    }
    return(
        <div>
            <h1>Understending React Hooks</h1>
            <h2>The current value is : {number}</h2>
            <h2>the current value is:{marks}</h2>
            <button onClick={updatenumber}>update the number</button><br /><br />
            <button onClick={updatemarks}>update the marks</button>
            <h2>The current school is : {school}</h2>
            <button onClick={updateschool}>update the school</button>
            <h2>The current name is : {name}</h2>
            <button onClick={updatename}>Update the name</button>
            <h2>The current city is : {city}</h2>
            <button onClick={updatecity}>update city</button>
            <h2>The current age is : {age}</h2>
            <button onClick={updateage}>updateage</button>
        </div>
    )
}
export default Thirdcomponent