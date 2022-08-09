import React, { Component } from "react";
import { Link } from "react-router-dom";
import { default as Data } from '../Data.js';



export default class Courses extends Component {
  constructor() {
    super();
    this.state = {
      data: new Data(),
      courses: []
    }
  }

  componentDidMount() {
    this.state.data.getCourse()
    .then(res => this.setState({courses: res.course}))
    .catch(err => console.log(err));
  }

  render() {

    let {courses} = this.state; 
  

    
  //courses = courses.course;
  return (
    <div className="wrap main--grid">

    {/* maps through courses array to make a "card" for each course */}
      {courses.map((course, index) => (
        <Link
          to={`courses/${course.id}`}
          key={index}
          className="course--module course--link"
        >
          <h2 className="course--label">Course</h2>
          <h3 className="course--title">{course.title}</h3>
        </Link>
      ))}
      <Link to={`/courses/create`} className="course--add--module course--module">
        <span className="course--add--title">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 13 13"
            className="add"
          >
            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
          </svg>
          New Course
        </span>
      </Link>
    </div>
  );
}
}


  //https://www.pluralsight.com/guides/fetching-data-updating-state-react-class


  //https://magic.reactjs.net/htmltojsx.htm
  

            
