// // // //Stateful Component 
import React, {Component} from "react";
import Form from "./Form";


export default class UpdateCourse extends Component {

  state = {
    authenticatedUser: this.props.context.authenticatedUser,
    data: this.props.context.data,
    course: {
      User: {},
      title: "",
      description: "",
      materialsNeeded: "",
      estimatedTime: "",
      userId: ""
    },

    id: this.props.match.params.id,
    errors: [],
  };


  render() {
    const { 
       course,
       errors, 
       isLoading } = this.state;
  console.log(course)
  
  
    //https://magic.reactjs.net/htmltojsx.htm

    return (

      <div className="wrap">
        <>
          <h2>Update Course</h2>
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Update Course"
            elements={() => (
              <React.Fragment>
                <div className="main--flex">
                  <div>
                    <label htmlFor="title">Course Title</label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={course.title}
                      onChange={this.change}
                   
                    />
                    <p>{`By: ${course.User.firstName} ${course.User.lastName}`}</p>
                    <label htmlFor="description">Course Description</label>
                    <textarea
                      id="description"
                      name="description"
                      type="text"
                      value={course.description}
                      onChange={this.change}
                  
                    />
                  </div>
                  <div>
                    <label htmlFor="estimatedTime">Estimated Time</label>
                    <input
                      id="estimatedTime"
                      name="estimatedTime"
                      type="text"
                      value={course.estimatedTime}
                      onChange={this.change}
                    
                    />
                    <label htmlFor="materialsNeeded">Materials Needed</label>
                    <textarea
                      id="materialsNeeded"
                      name="materialsNeeded"
                      type="text"
                      value={course.materialsNeeded}
                      onChange={this.change}
                 
                    />
                  </div>
                </div>
              </React.Fragment>
            )}
          />
        </>
      </div>
    );
  }


  componentDidMount() {
    const { authenticatedUser, data, course, id } = this.state;

    data.getCourseDetail(id)
      .then((course) => {
        if (course) {
          this.setState(course);
          console.log(course);
        }
      })
      .catch((err) => console.log(err));
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

   cancel = () => {
     const { id } = this.state;
     this.props.history.push(`/courses/${id}`);
    };

   }

