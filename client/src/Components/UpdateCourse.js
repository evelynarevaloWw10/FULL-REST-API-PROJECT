// // // //Stateful Component 
import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Form from "./Form";
import { Context } from "../Context";

 export default function UpdateCourse() {
 
   const { authenticatedUser, data } = useContext(Context);

  const [course, setCourse] = useState({
  
      user: {},
      title: "",
      description: "",
      materialsNeeded: "",
      estimatedTime: "",
      userId: "",
      emailAddress: authenticatedUser.emailAddress,
      password: authenticatedUser.password  
    })

    const { id } = useParams();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



   useEffect(() => {
    data.getCourseDetail(id)
      .then((course) => {
        if (course) {
          setCourse(course);

          
          setIsLoading(false);
       if (course.userId !== authenticatedUser.id) {
        
            history.push("/forbidden");
          }
        }
      })
      .catch((errors) => {
        console.log(errors);
        history.push("/error");
      });
  }, []);

  const change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCourse((course) => ({ ...course, [name]: value }));
  };

  const submit = () => {
  
    data.updateCourse(course, authenticatedUser)
      .then((errors) => {
        if (errors.length) {
          setErrors(errors);
          console.log(errors);
        } else {
          history.push(`/courses/${id}`);
        }
      })
      .catch((err) => {
        console.log(err);

        history.push("/error");
      });
  };

    const cancel = () => {
     const { id } = this.state;
     this.props.history.push(`/courses/${id}`);
    };


    return (

      <div className="wrap">
   {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>Update Course</h2>
          <Form
            cancel={cancel}
            errors={errors}
            submit={submit}
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
                      onChange={change}
                   
                    />
                    <p>{`By: ${course.user.firstName} ${course.user.lastName}`}</p>
                    <label htmlFor="description">Course Description</label>
                    <textarea
                      id="description"
                      name="description"
                      type="text"
                      value={course.description}
                      onChange={change}
                  
                    />
                  </div>
                  <div>
                    <label htmlFor="estimatedTime">Estimated Time</label>
                    <input
                      id="estimatedTime"
                      name="estimatedTime"
                      type="text"
                      value={course.estimatedTime}
                      onChange={change}
                    
                    />
                    <label htmlFor="materialsNeeded">Materials Needed</label>
                    <textarea
                      id="materialsNeeded"
                      name="materialsNeeded"
                      type="text"
                      value={course.materialsNeeded}
                      onChange={change}
                 
                    />
                  </div>
                </div>
              </React.Fragment>
            )}
          />
        </>
        )}
      </div>
    );
  }


  // componentDidMount() {
  //   const { authenticatedUser, data, course, id } = this.state;

  //   data.getCourseDetail(id)
  //     .then((course) => {
  //       if (course) {
  //         this.setState(course);
  //         console.log(course);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }

  // change = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;

  //   this.setState(() => {
  //     return {
  //       [name]: value,
  //     };
  //   });
  // };

  //  cancel = () => {
  //    const { id } = this.state;
  //    this.props.history.push(`/courses/${id}`);
  //    };

   

 