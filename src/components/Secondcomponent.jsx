const Secondcomponent=()=>{
    // here is where we declare our variables 
    let message="i love Programming"
    let age =20
    let name="keith"
    let sport="Rugby"
    let school="Maseno"
    let weight=80
    return(
        <div>
            <h1>understanding variables in reactjs</h1>
            {/* bind message variable  */}
            <h2>{message}</h2>
            {/* bind age variable */}
            <p>Boniface will be {age} years old next year</p>
            <p>The student is known as {name}</p>
            <p>The student learns in {school}</p>
            <p>The student plays {sport}</p>
            <p>The student weighs {weight} kgs </p>
        </div>
    )
}
export default Secondcomponent