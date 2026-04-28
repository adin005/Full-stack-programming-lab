import React from 'react';

function Greeting({ name, timeOfDay, bgColor }) {
  let message = "";
  if (timeOfDay === "Morning") message = "Good Morning";
  else if (timeOfDay === "Afternoon") message = "Good Afternoon";
  else message = "Good Evening";

  return (
    <div style={{ backgroundColor: bgColor, padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h1>{message}, {name}!</h1>
    </div>
  );
}
export default Greeting;