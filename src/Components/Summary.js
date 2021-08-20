import React from 'react';

function Summary(props) {
  return (
    <div >
      <h3>Your calculated GPA score: </h3>
      <p>Your courses: {props.globalState.courseList}</p>
      <p>Your grade: {props.globalState.grade}</p>
    </div>
  );
}

export default Summary;