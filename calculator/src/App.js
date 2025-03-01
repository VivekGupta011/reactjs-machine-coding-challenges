import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";

// function App() {
//   const numbers= [1,2,3,4,5,6,7,8,9,0]
//   const expressions = ['+', '-', '*', '%']

//   const [userInput, setUserInput] = useState('')
//   const [result, setResult] = useState(null)
//   const [submitClicked, setSubmitClicked] = useState(false)

//   const handleClick = (input) => {
//     setUserInput(prevInput => prevInput + input.toString());
//   }
//   console.log('userInput', userInput)

//   const handleSubmit = () => {
//     let value = eval(userInput)
//     console.log('value', value)
//     setResult(value)
//     setSubmitClicked(true)
//   }

//   const handleReset = () => {
//     setResult(null)
//     setSubmitClicked(false)
//     setUserInput('')
//   }

//   return (
//     <div className="App">
//       <div className='user-input-and-calc'>
//          {submitClicked ? result : userInput}
//       </div>

//       <div className='number-holder'>
//       {
//         numbers.map((item) => {
//           return(
//             <button onClick={() => handleClick(item)}>{item}</button>
//           )
//         })
//       }
//       </div>

//       <div className='expression-holder'>
//       {
//         expressions.map((item) => {
//           return(
//             <button onClick={() => handleClick(item)}>{item}</button>
//           )
//         })
//       }
//       </div>

//       <button onClick={() => handleSubmit()}>Submit</button>
//       <button onClick={() => handleReset()}>Reset</button>

//     </div>
//   );
// }

// import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState(""); // Stores the current input
  const [result, setResult] = useState(""); // Stores the evaluated result

  const handleButtonClick = (value) => {
    // Handles button clicks
    if (value === "=") {
      try {
        const evalResult = eval(input); // Evaluate the expression
        setResult(evalResult);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear input
      setResult(""); // Clear result
    } else if (value === "←") {
      setInput(input.slice(0, -1)); // Remove the last character
    } else {
      setInput(input + value); // Append value to input
    }
  };

  const buttons = [
    "C",
    "←",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
    "%",
  ];

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "5px",
          backgroundColor: "#f0f0f0",
          textAlign: "right",
        }}
      >
        <div style={{ fontSize: "20px", minHeight: "30px" }}>
          {input || "0"}
        </div>
        <div style={{ fontSize: "16px", color: "gray" }}>
          {result !== "" ? `= ${result}` : ""}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            style={{
              padding: "15px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#e6e6e6",
              cursor: "pointer",
            }}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
