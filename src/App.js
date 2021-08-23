import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import Course from './Components/Course';
import Summary from './Components/Summary';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      courseList: [""],
      gradeList: [],
      currentCourse: "",
      currentGrade: null
    } // end of state object
  } // end of constructor function


render() {
    return (
      <div className="App">
        <Navbar/>
        <p>Type the course you have taken and the grade you have received for it.</p>
        Course: <input type ="text" onChange = {this.updateCurCourse}/> &nbsp;    
        Grade: <input type = "number" onChange = {this.updateCurGrade}/> &nbsp;
        <button onClick = {this.addToCourseList}>Add course</button>
        {/* <Course name={this.state.courseList[0]} grade={this.state.gradeList[0]} addToCourseList = {this.addToCourseList} />
        <Course name={this.state.courseList[1]} grade={this.state.gradeList[1]} addToCourseList = {this.addToCourseList} />
        <Course name={this.state.courseList[2]} grade={this.state.gradeList[2]} addToCourseList = {this.addToCourseList} /> */}
        {/* <Summary globalState={this.state} /> */}
        <p>Your courses: {this.state.courseList}</p>        
        <p>Your GPA: {this.calculateGpa()}</p>        
      </div>
    );
  } // end render function

 addToCourseList = () => {
    let newCourseList = [...this.state.courseList, this.state.currentCourse]
    let newGradeList = [...this.state.gradeList, this.state.currentGrade]
    this.setState({courseList: newCourseList, gradeList: newGradeList})
  }
  
updateCurCourse = (e) => {
  let newCurCourse = e.target.value
  this.setState({currentCourse: newCurCourse})
} 

updateCurGrade = (e) => {
  let newCurGrade = e.target.value
  newCurGrade = parseInt(newCurGrade)
  this.setState({currentGrade: newCurGrade})
} 


 calculateGpa(){
  let calcGpa = (this.state.gradeList.reduce((a,b) => a+b,0))/this.state.gradeList.length
  return calcGpa
 }
}

export default App;




//TO DO LIST
/*
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
);



























/*
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App; */
