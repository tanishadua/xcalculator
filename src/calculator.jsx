import React, { useState } from "react";
import "./App"
import {evaluate} from "mathjs"
const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [value,setValue] = useState('')
  const [show,setShow] = useState(false)
  function clearAll(){
    setExpression("")
    setShow(false)
  }
  const evaluateExpression = () => {
    try{
        if(expression===''){
            setValue('Error')
        }
        else{
            const result = evaluate(expression)
            setValue(result.toString())
        }
        setShow(true)
    }catch(error){
        alert("Invalid expression")
    }  
  }
  return (
    <div className="outerBox">
      <h1>React Calculator</h1>
      <input type="text" style={{marginBottom:"10px"}} value={expression}/>
      {show && <div><p>{value}</p></div>}
      <br/>
      <div className="window">
        <div>
          <button type="button" value="7" onClick={(e)=>setExpression(expression+e.target.value)}>7</button>
          <button type="button" value="8" onClick={(e)=>setExpression(expression+e.target.value)}>8</button>
          <button type="button" value="9" onClick={(e)=>setExpression(expression+e.target.value)}>9</button>
          <button type="button" value="+" onClick={(e)=>setExpression(expression+e.target.value)}>+</button>
        </div>
        <div>
          <button type="button" value="4" onClick={(e)=>setExpression(expression+e.target.value)}>4</button>
          <button type="button" value="5" onClick={(e)=>setExpression(expression+e.target.value)}>5</button>
          <button type="button" value="6" onClick={(e)=>setExpression(expression+e.target.value)}>6</button>
          <button type="button" value="-" onClick={(e)=>setExpression(expression+e.target.value)}>-</button>
        </div>
        <div>
          <button type="button" value="1" onClick={(e)=>setExpression(expression+e.target.value)}>1</button>
          <button type="button" value="2" onClick={(e)=>setExpression(expression+e.target.value)}>2</button>
          <button type="button" value="3" onClick={(e)=>setExpression(expression+e.target.value)}>3</button>
          <button type="button" value="*" onClick={(e)=>setExpression(expression+e.target.value)}>*</button>
        </div>
        <div>
          <button type="button" value="C" onClick={clearAll}>C</button>
          <button type="button" value="0" onClick={(e)=>setExpression(expression+e.target.value)}>0</button>
          <button type="button" value="=" onClick={evaluateExpression}>=</button>
          <button type="button" value="/" onClick={(e)=>setExpression(expression+e.target.value)}>/</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
