import React, { useState } from "react";
import "./../App.css";

const StudentForm = ({ displayStudent }) => {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [studentId, setStudentID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: setStudentID,
      name: studentName,
      age: studentAge,
      grade: studentGrade,
    };

    displayStudent(newStudent);
    console.log(newStudent);
  };

  return (
    <div className="student-form">
      <h2>Add New Student</h2>
      <form>
        <input
          value={studentId}
          onChange={(e) => setStudentID(e.target.value)}
          type="text"
          name="id"
          placeholder="Student Id"
          required
        />
        {/* TODO: Add input fields for student name, age, and grade */}
        <input
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          type="text"
          name="name"
          placeholder="Student Name"
          required
        />

        <input
          value={studentAge}
          onChange={(e) => setStudentAge(e.target.value)}
          type="Number"
          name="name"
          placeholder="Student Age"
          required
        />

        <label htmlFor="name">Grade: </label>
        <select
          value={studentGrade}
          onChange={(e) => setStudentGrade(e.target.value)}
          name="grade"
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
        {/* TODO: Add a submit button */}

        <button className="form_button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
