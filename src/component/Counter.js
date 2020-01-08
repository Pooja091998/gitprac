import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prev => prev + 1);
    }
  };
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count- {count}</button>
      <button onClick={IncrementFive}>Increment by 5 </button>
    </div>
  );
}
export default Counter;
