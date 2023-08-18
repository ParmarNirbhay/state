import React , {useState} from "react";

let a=10;
const States1 =() =>{

    let[count,setCount]=useState(0);


    function increase1(){
        a =a+1;
        console.log(a)
    }


    function insrease2(){
        setCount(count+1)

    }

    return(
        <div>
            <h1>value of a is ={a}</h1>
            <button onClick={increase1}>increase1</button>

            <h1>value of count is={count}</h1>
            <button onClick ={insrease2}>insrease2</button>
        </div>
    )

}
export default States1;
