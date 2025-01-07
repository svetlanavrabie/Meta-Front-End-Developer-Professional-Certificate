import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0);
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	 e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
     e.preventDefault(); 
    setResult((result) => result  * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result  / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	  e.preventDefault(); 
    setResult((preval) => preval * 0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 

      <form> 
        <div className="btnInput">
          <p ref={resultRef}> 
            Result: {result} 
          </p> 
           
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          /> 
        </div>   
       
        <div className="btnCalc">
          <button className="btnOperation" onClick={plus}>Add</button>
          <button className="btnOperation" onClick={minus}>Substract</button>
          <button className="btnOperation" onClick={times}>Multiply</button>
          <button className="btnOperation" onClick={divide}>Divide</button>
        </div>

        <div className="btnCalc">
          <button className="btnReset" onClick={resetInput}>Reset Input</button>
        </div> 

        <div className="btnCalc">
          <button className="btnReset"onClick={resetResult}>Reset Result</button>
        </div>     
      </form> 
    </div> 
  ); 
} 
 
export default App; 
