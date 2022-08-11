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
            Errors: [],
       
        }

        render() {
            const { 
              CourseTitle, 
              CourseDescription, 
              EstimatedTime, 
              MaterialsNeeded, 
              errors,
            
            } = this.state;

   const {context} = this.props;
   console.log(context)


          return (
      
    


      
           <div className="wrap">
                  <h2>Create Course </h2>
                  
            
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

    }


        
        
    