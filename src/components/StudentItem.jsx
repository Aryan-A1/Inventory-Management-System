import React from "react";

const StudentItem = ({ student }) => {
  {/* TODO: Display student name, age, and grade */}
  return (
    <li key={student.id} className="student-item">
      <h3> 🎓 {student.name}</h3>
      <h4>Age: {student.age}</h4>
      <p>Grade: {student.grade}</p>
    </li>
  );
};

export default StudentItem;
