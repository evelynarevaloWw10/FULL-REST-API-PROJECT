// // //Stateful Component 

import React, { useEffect, useState } from 'react';
import {  useParams, Link, useHistory } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

//functional component data will be assigned props.context
//using param hook to be able to access the key value pair of each course

export default function CourseDetail(props){

  const{ authenticatedUser, data} = props.context  
  const [course, setCourse] = useState({});
  const history = useHistory();
  let {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);


  //use effect hook calling getCourse() GET request from data.js then setting response to equal setCourse function. Had issues fetching data//not fast enough so added finally to make sure that it would not continue running program until loading was false
  useEffect(() => { data.getCourseDetail(id)
      .then((res) => setCourse(res))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);


const deleteButton = () => {
    data.deleteCourse(course.course.id, authenticatedUser)
    .then(errors => {
      if (errors) {
        console.log(errors);
      } else {
        console.log('Course deleted')
      }
    })
    .then(() => history.push('/'))
    .catch(err => console.log(err));

}



//https://www.youtube.com/watch?v=OrDzmC-IkR0
////https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/
// //https://stackoverflow.com/questions/71025652/get-id-using-useparams-hook-in-functional-component-react-router-dom-v6
// //https://magic.reactjs.net/htmltojsx.htm html to jsx compiler

//used link and reactMarkdown to be able to make information dynamic also to be able to link up my link buttons to correct routes


return (
  <main>
            <div className="actions--bar">
                <div className="wrap">
                
                    <Link className="button" to={`/courses/${id}/update`}>Update Course</Link>
                    <button className="button" onClick={deleteButton}>Delete Course</button>
                    <Link className="button button-secondary" to="/">Return to List</Link>
                </div>
            </div>

{isLoading ? (<h2>Loading...</h2> ):(
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.course.title}</h4>
                            <p>{`${course.course.user.firstName} ${course.course.user.lastName}`}</p>
                            
                            <ReactMarkdown className="course--description" children={course.course.description} />
                        </div>
                        
                        <div>
                           <ReactMarkdown className="course--detail--list" children={course.course.estimatedTime} />
                       

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ReactMarkdown className="course--detail--list" children={course.course.materialsNeeded} />

                        </div>
                    </div>
                </form>
            </div>
)}
    </main>

 );
    





 }
