import React, {useState} from "react";



const Form2 = () => {
    const[name,setName] = useState("");

    return (
        <div>
             <input type="text" placeholder="Enter your name" 
              onChange ={e=> setName(e.target.value)}
             />
             <button>Submit</button>
             <p>{name.toUpperCase()}</p> 
             {/* This paragraph should display names in capital letter only when button is pressed */}
        </div>
    )

}

export default Form2;