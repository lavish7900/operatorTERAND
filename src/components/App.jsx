
// we cant put statements in ejx so we use ternary operator to convet stat to expression
import React from "react";
import Login from "./Login"
const isLoggedin = false;

// alternate to this we use ternary opwerator 
// function conditionalRender(){
//   if(isLoggedin === true){
//     return <h1>Hello</h1>
//   }else{
//     return(<div>
//      <Login  />
//     </div>)
    
//   }
// // use of && operator }
// const currentTime = new Date().getHours();
// console.log(currentTime);



function App() {
  return (
    <div className="container">
     {isLoggedin===true? <h1>Hello</h1>:<Login />}
     {/* {currentTime<=20&&<h1>go to watch tv</h1>} */}
    </div>
  );
}

export default App;
