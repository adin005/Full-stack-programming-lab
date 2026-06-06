import React from 'react';
// 1. Import your components
import StudentCard from './Task1/StudentCard';
import CourseItem from './Task2/CourseItem';
import Greeting from './Task3/Greeting';

function App() {
  // Data for Task 2
  const courses = [
    { id: 1, name: "Web Dev", teacher: "Sir. Sharif Hussain", time: "3 Months", type: "Online" },
    { id: 2, name: "Python", teacher: "Ms. Sara", time: "2 Months", type: "Offline" },
    { id: 3, name: "Graphic Design", teacher: "Mr. Ali", time: "1 Month", type: "Online" },
    { id: 4, name: "Networking", teacher: "Sir. Nasir Ayub", time: "4 Months", type: "Offline" },
    { id: 5, name: "AI Basics", teacher: "Ms. Sana", time: "5 Months", type: "Online" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>My React Lab Tasks</h1>

      <hr />
      <h2>Task 1: Student Cards</h2>
      <StudentCard name="Soha Rafiq" rollNo="001" department="CS" university="UET" color="#add8e6" />
      <StudentCard name="Sohaima Wanya" rollNo="002" department="IT" university="FAST" color="#ffb6c1" />
      <StudentCard name="Hassan Abdullah" rollNo="003" department="SE" university="NUST" color="#98fb98" />

      <hr />
      <h2>Task 2: Course List</h2>
      {courses.map(item => (
        <CourseItem 
          key={item.id}
          courseName={item.name} 
          instructor={item.teacher} 
          duration={item.time} 
          type={item.type} 
        />
      ))}

      <hr />
      <h2>Task 3: Dynamic Greeting</h2>
      <Greeting name="Nida Sakina" timeOfDay="Morning" bgColor="#fff9c4" />
      <Greeting name="Fatima Arshad" timeOfDay="Afternoon" bgColor="#ffe0b2" />
      <Greeting name="Sarah Amer" timeOfDay="Evening" bgColor="#d1c4e9" />
    </div>
  );
}

export default App;