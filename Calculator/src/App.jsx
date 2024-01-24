import React, { useState } from "react";
import "./App.css";
import Button from "./button";

const keys = [
  "%",
  "^",
  "C",
  "AC",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "-",
  "=",
];

export default function App() {
  const [sum, setSum] = useState([]);

  const handleClick = (value) => {
    console.log(value);

    if (value === "=") {
      try {
        const calcString = sum.join("");
        // creatinga new var and changing the sum/array into a string
        const calcSum = eval(calcString);
        // create new var that stores the calString eval(ability for using maths)
        setSum([calcSum]);
        // setting the new state of setSum to calcsum = new answer and using [] because we are setting the first value of the array
        return;
      } catch (error) {
        setSum([]);
        setSum(["Error"]);
        return;
      }
    }
    if (value === "AC") {
      setSum([]);
      return;
    }

    if (value === "C") {
      const newSum = [...sum];
      newSum.pop();
      setSum(newSum);
      return;
    }

    if (value === "^") {
      // Instead of pushing ^ to the sum, push ** to the sum
      setSum((prevSum) => [...prevSum, "**"]);
      return;
  }

  if (value === "%") {
      // Instead of pushing % to the sum, push /100 to the sum
      setSum((prevSum) => [...prevSum, "/100"]);
      return;
  }


    // The try wrap and catch is a way to check and see if any errors occur, if that being the case it will reset but also display a string "Error"
    setSum((prevSum) => [...prevSum, value]);
  };

  return (
    <div>
      <h1>React Calc</h1>
      <main>
        <div className="Container">
          {/* the plastic for a calulator ie outer-sehll */}
          <div className="Screen">{sum[0] ? sum.join("") : 0}</div>
          {/* checking to see if the sum from useState is empty, if its empty then display Zero */}
          <div className="buttonKeys">
            {keys.map((key) => (
              // loop through the array of keys, then for each item in the array, display a button
              <Button key={key} label={key} onClick={handleClick} />
              // key = id of button, label = is the text of the button,  onClick = the function of the  button
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
