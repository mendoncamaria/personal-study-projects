import React, { useState } from 'react';

function HookCounterTwo() {
  const inititalCount = 0;
  const [count, setCount] = useState(inititalCount);

  const incrementFifteen = () => {
    for (let i = 0; i < 15; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const decrementTen = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(inititalCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFifteen}>Increment by 15</button>
      <button onClick={decrementTen}>Decrement by 10</button>
    </div>
  );
}

export default HookCounterTwo;
