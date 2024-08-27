import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)
  //to set initial counter value is 5
  // let counter = 5;

 const addValue = () =>{
  // console.log("value added", Math.random());
  if (counter < 20) {
    setCounter(counter + 1)
  }else{
    alert("20 is max")
  }
  // console.log("Clicked", setCounter(counter));

 }

 const removeValue = () => {
  if (counter > 0) {
    setCounter(counter - 1)
  }else{
    alert("0 is min")

  }
  // console.log("remove",counter);
 }

  return (
    <>
    <h1>chai aur react</h1>
    {/* use counter variable here to display value of counter variable */}
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value : {counter}</button>
    <br />
    <button id="IdrmvBtn" onClick={removeValue}>Remove value : {counter}</button>
  <p>footer:{counter}</p>    
    

    </>
  )
}

export default App
