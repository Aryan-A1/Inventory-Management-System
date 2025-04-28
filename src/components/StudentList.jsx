import React from "react";
import StudentItem from "./StudentItem.jsx";
import "./../App.css";
import { li } from "framer-motion/client";

// Hardcoded list of students
const studentData = [
  { id: 1, name: "Alice", age: 20, grade: "A" },
  { id: 2, name: "Bob", age: 22, grade: "B" },
  { id: 3, name: "Charlie", age: 21, grade: "A-" },
];

const StudentList = ({studentDat}) => {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {/* TODO: Use appropriate method to display students from studentData using StudentItem component */}
        {
          studentData.map((student) => (
            <li key={student.id}>
              <StudentItem student={student} />
            </li>
          ))
        }
        {
        studentDat.map((e) => (
          <li key={e.id}>
            <StudentItem student={e} />
          </li>
        ))

        }
      </ul>
    </div>
  );
};

export default StudentList;
