import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setcounter] = useState(15)
  const addcount = () => {
    counter = counter + 1
    console.log(counter);
    // setcounter = () =>{
    //   counter + 1;
    // }
    setcounter(raj => raj + 1)
    //setcounter just accepts what should be the new value thats it!
    //here setcounter accepts parameters so it dont really matters just like js functions, ie function addone(x){ }
  }
  const deletecount = () =>{
    setcounter(counter - 1)
    console.log(counter);
    
  }

  return (
  <>
      <h1>React state initial value of counter {counter}</h1>
      <button onClick={addcount}>ADD</button> {" "}
      <button onClick={deletecount}>Delete</button>
  </>
  )
}

export default App
