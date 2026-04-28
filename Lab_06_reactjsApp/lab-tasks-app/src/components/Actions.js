import React, { useState } from 'react';

const Actions = () => {
  const [bgColor, setBgColor] = useState('#fff');
  const [textColor, setTextColor] = useState('#333');
  const [msg, setMsg] = useState('Interact with buttons below');

  return (
    <div className="card" style={{ backgroundColor: bgColor, transition: '0.3s' }}>
      <h2 
        style={{ color: textColor }} 
        onMouseOver={() => setTextColor('#ff6b6b')} 
        onMouseOut={() => setTextColor('#333')}
      >
        {msg}
      </h2>
      <div className="btn-group">
        <button onClick={() => setMsg("Welcome to React Events!")}>Show Message</button>
        <button onClick={() => setBgColor('#d1f2eb')}>Change Background</button>
        <button onClick={() => alert("This is a React Alert!")}>Show Alert</button>
      </div>
    </div>
  );
};

export default Actions;