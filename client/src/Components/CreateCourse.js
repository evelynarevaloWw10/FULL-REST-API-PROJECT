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
            errors: [],
            //userId: this.props.context.authenticatedUser.id
       
        }

        render() {
            const { 
              CourseTitle, 
              CourseDescription, 
              EstimatedTime, 
              MaterialsNeeded, 
              errors,
             // userId 
            
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
              submitButtonText="Create Course"
              elements={() => (

                <React.Fragment>
                  <div className="main--flex">
                    <div>
                      <label htmlFor="title">Course Title</label>
                      <input
                        id="CourseTitle"
                        name="CourseTitle"
                        type="text"
                        value={CourseTitle}
                        onChange={this.change}
                      
                      />
                     
                      <label htmlFor="CourseDescription">Course Description</label>
                      <textarea
                        id="CourseDescription"
                        name="CourseDescription"
                        type="text"
                        value={CourseDescription}
                        onChange={this.change}
                    
                      />
                    </div>
                    <div>  
                      <label htmlFor="EstimatedTime">Estimated Time</label>
                      <input
                        id="EstimatedTime"
                        name="EstimatedTime"
                        type="text"
                        value={EstimatedTime}
                        onChange={this.change}
                      
                      />
                      <label htmlFor="MaterialsNeeded">Materials Needed</label>
                      <textarea
                        id="MaterialsNeeded"
                        name="MaterialsNeeded"
                        type="text"
                        value={MaterialsNeeded}
                        onChange={this.change}
                      
                      />
                    </div>
                  </div>    
                </React.Fragment>
              )}
            />
          </div>
        );
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

      submit = () => {
        const {context} = this.props;
        const {data, authenticatedUser} = context;
        const {title, description, estimatedTime, materialsNeeded} = this.state;

        const course = {
          title,
          description,
          estimatedTime,
          materialsNeeded,
          //userId: authenticatedUser.id,
          emailAddress: authenticatedUser.emailAddress,
          password: authenticatedUser.password
        }


        data.createCourse(course, authenticatedUser)
        .then((errors) => {
          if (errors.length) {
            this.setState({errors});
          } else {
            console.log(`${title} successfully created`);
            this.props.history.push('/');
          }
        })
        .catch(err => {
          console.log(err);
        })
        }

        cancel = () => {
        this.props.history.push('/');
        }


    }


       // <p>By: {authenticatedUser.firstName} {authenticatedUser.lastName} </p>
        
    