  
import React from 'react';
import '../App.css';

function Course(props) {
  return(
    <div onClick={() => {props.addToCourseList(props.name)}}>
      <p>Name of the course: {props.name}</p>
      <p>Grade for the course {props.grade}</p>
    </div>
  );
}

export default Course;