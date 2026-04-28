import React from 'react';

function CourseItem({ courseName, instructor, duration, type }) {
  return (
    <div style={{ borderBottom: '2px solid gray', padding: '10px', margin: '5px' }}>
      <h4>{courseName} - <span style={{color: 'blue'}}>{type}</span></h4>
      <p>Instructor: {instructor} | Duration: {duration}</p>
    </div>
  );
}
export default CourseItem;