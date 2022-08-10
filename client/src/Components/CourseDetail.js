// // //Stateful Component 

import React, { useEffect, useState } from 'react';
import {  useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


export default function CourseDetail(props){

  const{data} = props.context;
  const [course, setCourse] = useState({});
  let {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    data
      .getCourseDetail(id)
      .then((res) => setCourse(res))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);


//https://www.youtube.com/watch?v=OrDzmC-IkR0
////https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/
// //https://stackoverflow.com/questions/71025652/get-id-using-useparams-hook-in-functional-component-react-router-dom-v6
// //https://magic.reactjs.net/htmltojsx.htm html to jsx compiler

return (
  
  <main>
            <div className="actions--bar">
                <div className="wrap">
                    <Link className="button" to="/update">Update Course</Link>
                    <Link className="button" onClick="/delete">Delete Course</Link>
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
                            <p><p>{`${course.course.User.firstName} ${course.course.User.lastName}`}</p></p>
                            
                            <ReactMarkdown className="course--description" children={course.course.description} />
                        </div>
                        
                        <div>
                           <ReactMarkdown className="course--detail--list" children={course.course.estimatedTime} />
                            <p>14 hours</p>

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
