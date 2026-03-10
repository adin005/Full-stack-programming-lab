function StudentCard(props) {
  return (
    <div style={{ 
      backgroundColor: props.color || 'white', 
      border: '2px solid #333', 
      margin: '10px', 
      padding: '15px',
      borderRadius: '10px' 
    }}>
      <h3>Name: {props.name}</h3>
      <p>Roll No: {props.rollNo}</p>
      <p>Dept: {props.department}</p>
    </div>
  );
}

export default StudentCard; // This allows App.js to "see" this file