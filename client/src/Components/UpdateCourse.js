// // // //Stateful Component 
import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Form from "./Form";
import { Context } from "../Context";

 export default function UpdateCourse() {


 const { authenticatedUser, data } = useContext(Context);


//https://reactjs.org/docs/hooks-state.html


//assigning each variable state instead of just having course have state in one object, which did not allow me to update the value of state further down
  const [course, setCourse] = useState('')
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [materialsNeeded, setMaterialsNeeded] = useState('');
    const { id } = useParams();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



//useEffect is used to fetch the data 
   useEffect(() => {
    data.getCourseDetail(id)
      .then((course) => {
        if (course) {
          setCourse(course);

          //setIsLoading is checking if data is too slow and will not rendering if loading
          setIsLoading(false);
       if (course.userId !== authenticatedUser.id) {
        setTitle(course.course.title);
        setDescription(course.course.description)
        setEstimatedTime(course.course.estimatedTime)
        setMaterialsNeeded(course.course.materialsNeeded)  
          }
        }
      })
      .catch((errors) => {
        console.log(errors);
        history.push("/error");
      });
  }, [id, history, data, authenticatedUser.id]);

  //trying to use switch to use the set() method for values with empty state
  //https://stackoverflow.com/questions/56802646/setting-the-state-with-the-switch-instruction-in-the-react

   const change = (event) => {
    const value = event.target.value
    switch (event.target.name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
         break;
         case "estimatedTime":
        setEstimatedTime(value);
        break;
      case "materialsNeeded":
        setMaterialsNeeded(value);
        break;
      default:
      return;
      
    };

   };


 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create



  const submit = () => {
    

    data.putUpdateCourse(
      {id: course.course.id,
      title,
      description,
      estimatedTime,
      materialsNeeded,
      userId: authenticatedUser.id,
     },

    authenticatedUser)
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
    history.push(`/courses/${id}`);
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
                     value={title}
                     onChange={change}
                  
                   />
                   <p>{`By: ${course.course.user.firstName} ${course.course.user.lastName}`}</p>
                   <label htmlFor="description">Course Description</label>
                   <textarea
                     id="description"
                     name="description"
                     type="text"
                     value={description}
                     onChange={change}
                 
                   />
                 </div>
                 <div>
                   <label htmlFor="estimatedTime">Estimated Time</label>
                   <input
                     id="estimatedTime"
                     name="estimatedTime"
                     type="text"
                     value={estimatedTime}
                     onChange={change}
                   
                   />
                   <label htmlFor="materialsNeeded">Materials Needed</label>
                   <textarea
                     id="materialsNeeded"
                     name="materialsNeeded"
                     type="text"
                     value={materialsNeeded}
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




  






  
   

 