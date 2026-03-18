import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Task 1: Counter</h2>
      <h1 style={{ fontSize: '3rem' }}>{count}</h1>
      <div className="btn-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(Math.max(0, count - 1))}>Decrement</button>
        <button className="reset-btn" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
