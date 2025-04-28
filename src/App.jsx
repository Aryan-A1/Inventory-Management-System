import React, { useState } from "react";
import StudentList from "./components/StudentList.jsx";
import StudentForm from "./components/StudentForm.jsx";
import "./App.css";

const App = () => {
  const [studentData, setStudentData] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudentData([...studentData, newStudent])
  } 


  return (
    <div className="app-container">
      <h1>Student Management System</h1>
      <StudentForm displayStudent={handleAddStudent} />
      <StudentList studentDat={studentData} />
    </div>
  );
};

export default App;
