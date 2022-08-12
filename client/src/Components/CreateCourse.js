// // //Stateful Component 

import React, { Component } from "react";
import Form from "./Form";


 export default class CreateCourse extends Component {

        state = {
            authenticatedUser: this.props.context.authenticatedUser,
            title: "",
            description: "",
            estimatedTime: "",
            materialsNeeded: "",
            errors: [],

        }

        render() {
            const { 
              title, 
              description, 
              estimatedTime, 
              materialsNeeded, 
              errors, 
              authenticatedUser
            } = this.state;

            const {context} = this.props;
           // const {authenticatedUser} = context;
            //console.log(authenticatedUser);

   
          return (
      

          <div className="wrap">
            <h2>Create Course</h2>
            <Form
              cancel={this.cancel}
              errors={errors}
              submit={this.submit}
              submitButtonText="Create Course"
              submitTwo={this.submit}
              submitButtonTwoText=""

              elements={() => (
                <React.Fragment>
                  <div className="main--flex">
                    <div>
                      <label htmlFor="title">Course Title</label>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        value={title}
                        onChange={this.change}
                       
                      />
                      <p>By: {authenticatedUser.firstName} {authenticatedUser.lastName} </p>
                      <label htmlFor="description">Course Description</label>
                      <textarea
                        id="description"
                        name="description"
                        type="text"
                        value={description}
                        onChange={this.change}
                      
                      />
                    </div>
                    <div>  
                      <label htmlFor="estimatedTime">Estimated Time</label>
                      <input
                        id="estimatedTime"
                        name="estimatedTime"
                        type="text"
                        value={estimatedTime}
                        onChange={this.change}
                    
                      />
                      <label htmlFor="materialsNeeded">Materials Needed</label>
                      <textarea
                        id="materialsNeeded"
                        name="materialsNeeded"
                        type="text"
                        value={materialsNeeded}
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
          userId: authenticatedUser.id,
          emailAddress: authenticatedUser.emailAddress,
          password: authenticatedUser.password
        }


        data.createCourse(course, authenticatedUser)
        .then((errors) => {
          if (errors) {
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