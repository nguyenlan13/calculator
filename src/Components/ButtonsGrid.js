import React, { useState } from "react";
import DisplayScreen from "./DisplayScreen";
import { operations, numbers } from "./Constants";

export default function ButtonsGrid(){

    const [equation, setEquation] = useState("")

    const [total, setTotal] = useState("")
    
  
    const addToEquation = (value) => {
        setEquation((equation) => [...equation, value + ""])
    }

    const clearAll = () => {
        setEquation("")
        setTotal("")
    }

    const backSpace = () => {
        setEquation(function(equation) {
        let lastItem = equation.pop();
        console.log(equation)
        return equation;
        });
    }

    const operators = (value) => {
        switch(value){
            case "-/+":
                return equation * -1
            case "%":
                return equation * .01
            case "/":
                return
            case "x":
                return
            case "+":
                return
            case "-":
                return
        }
    }

    const calculator = (equation) => {

    //    let string = equation.toString()
    //    let index = 0

        // string.forEach(calculate)
        // function calculate(item, index){
        //     if(item === "+")
        // }
        
    }

    return(
        <>
            <DisplayScreen equation={equation} total={total} />
            <div className="buttonsGrid">
                {/* <button className="onButton">ON</button> */}
                <button value="<=" onClick={() => backSpace()}>Back Space</button>
                <button value="+/-" onClick={(e) => operators(e.target.value)}>+/-</button>
                <button value="%" onClick={(e) => operators(e.target.value)}>%</button>
                <button className="onButton" value="Clear" onClick={() => clearAll()}>Clear</button>
                <button value="7" onClick={(e) => addToEquation(e.target.value)}>7</button>
                <button value="8" onClick={(e) => addToEquation(e.target.value)}>8</button>
                <button value="9" onClick={(e) => addToEquation(e.target.value)}>9</button>
                <button value="/" onClick={(e) => operators(e.target.value)}>/</button>
                <button value="4" onClick={(e) => addToEquation(e.target.value)}>4</button>
                <button value="5" onClick={(e) => addToEquation(e.target.value)}>5</button>
                <button value="6" onClick={(e) => addToEquation(e.target.value)}>6</button>
                <button value="x" onClick={(e) => operators(e.target.value)}>x</button>
                <button value="1" onClick={(e) => addToEquation(e.target.value)}>1</button>
                <button value="2" onClick={(e) => addToEquation(e.target.value)}>2</button>
                <button value="3" onClick={(e) => addToEquation(e.target.value)}>3</button>
                <button value="-" onClick={(e) => operators(e.target.value)}>-</button>
                <button value="0" onClick={(e) => addToEquation(e.target.value)}>0</button>
                <button value="." onClick={(e) => addToEquation(e.target.value)}>.</button>
                <button value="=" onClick={() => calculator()}>=</button>
                <button value="+" onClick={(e) => operators(e.target.value)}>+</button>
            </div>
        </>
    )
}