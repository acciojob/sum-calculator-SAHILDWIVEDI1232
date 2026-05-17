import React, { useState, useEffect } from "react";
const [numbers,setNumbers]=useState([]);
const [input,setInput]=useState("");
const [sum,setSum]=useState(0);

const handleAdd()=>{
  if(input==""")return;

    const num = parseInt(input);
    setNumbers([...numbers, num]);
    setInput("");
}
useEffect(() => {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    setSum(total);
  }, [numbers]);

  return (
    <div>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <h3>Total Sum: {sum}</h3>
    </div>
  );
};

export default SumCalculator;
