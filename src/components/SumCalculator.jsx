import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "") return;

    const num = parseInt(value);

    setNumbers((prev) => [...prev, num]);
  };

  useEffect(() => {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    setSum(total);
  }, [numbers]);

  return (
    <div>
      <h2>Sum Calculator</h2>

      <input type="number" onChange={handleChange} />

      <h3>Sum: {sum}</h3>
    </div>
  );
};

export default SumCalculator;
