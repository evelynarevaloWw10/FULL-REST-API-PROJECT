// // //Stateful Component 

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";


 export default class CreateCourse extends Component {

        state = {
            CourseTitle: "",
            CourseDescription: "",
            EstimatedTime: "",
            MaterialsNeeded: "",
            Errors: []

        }

        render() {
            const { 
              CourseTitle, 
              CourseDescription, 
              EstimatedTime, 
              MaterialsNeeded, 
              errors 
            } = this.state;

   
          return (
      
            <div className="main--flex">
                    <div>
                       <label htmlFor="courseTitle">Course Title</label>
                      <input id="courseTitle" name="courseTitle" type="text" defaultValue />
                      <p>By Joe Smith</p>
                      <label htmlFor="courseDescription">Course Description</label>
                      <textarea id="courseDescription" name="courseDescription" defaultValue={""} />
                    </div>
    
            <Form
              cancel={this.cancel}
              errors={errors}
              submit={this.submit}
              submitButtonText="Sign Up"
              elements={() => (
                <React.Fragment>
                  <input
                    id="CourseTitle"
                    name="CourseTitle"
                    type="text"
                    value={CourseTitle}
                    onChange={this.change}
                    placeholder="Course Title"
                  />
                  <input
                    id="CourseDescription"
                    name="CourseDescription"
                    type="text"
                    value={CourseDescription}
                    onChange={this.change}
                    placeholder="Course Description"
                  />
                  <input
                    id="EstimatedTime"
                    name="EstimatedTime"
                    type="text"
                    value={EstimatedTime}
                    onChange={this.change}
                    placeholder="Estimated Time"
                  />
                  <input
                    id="MaterialsNeeded"
                    name="MaterialsNeeded"
                    type="text"
                    value={MaterialsNeeded}
                    onChange={this.change}
                    placeholder="Materials Needed"
                  />
                </React.Fragment>
              )}
            />
            <p>
              Already have a user account? Click here to <Link to="/signin">sign in</Link>!
            </p>
          </div>
        );
      }

      change = (event) => {
        const submit = event.target.submit;
        const value = event.target.value;
    
        this.setState(() => {
          return {
            [submit]: value,
          };
        });
      };

    }


            // <main>
            //   <div className="wrap">
            //     <h2>Create Course</h2>
            //     <div className="validation--errors">
            //       <h3>Validation Errors</h3>
            //       <ul>
            //         <li>Please provide a value for "Title"</li>
            //         <li>Please provide a value for "Description"</li>
            //       </ul>
            //     </div>
            //     <form>
            //       <div className="main--flex">
            //         <div>
            //           <label htmlFor="courseTitle">Course Title</label>
            //           <input id="courseTitle" name="courseTitle" type="text" defaultValue />
            //           <p>By Joe Smith</p>
            //           <label htmlFor="courseDescription">Course Description</label>
            //           <textarea id="courseDescription" name="courseDescription" defaultValue={""} />
            //         </div>
            //         <div>
            //           <label htmlFor="estimatedTime">Estimated Time</label>
            //           <input id="estimatedTime" name="estimatedTime" type="text" defaultValue />
            //           <label htmlFor="materialsNeeded">Materials Needed</label>
            //           <textarea id="materialsNeeded" name="materialsNeeded" defaultValue={""} />
            //         </div>
            //       </div>
            //       <button className="button" type="submit">Create Course</button><button className="button button-secondary" onclick="event.preventDefault(); location.href='/courses';">Cancel</button>
            //     </form>
            //   </div>
            // </main>
         // );
      
          
        
        
        
           // }
        
    