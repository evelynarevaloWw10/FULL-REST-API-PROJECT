// main container components 

import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Components/Header';
import UserSignUp from './Components/UserSignUp';
import UserSignIn from './Components/UserSignIn';
import UserSignOut from './Components/UserSignOut';
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';
import UpdateCourse from './Components/UpdateCourse';
import CreateCourse from './Components/CreateCourse';


import withContext from './Context';

const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CoursesWithContext = withContext(Courses)
const CourseDetailWithContext = withContext(CourseDetail);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CreateCourseWithContext = withContext(CreateCourse)

function App() {




 //The effect happens after render
 useEffect(() => {   
 fetch('http://localhost:5000/api/courses')
 .then((res) => res.json())
 .then((data) => console.log(data));
});


//Rohald helped with CourseDetail Route

  return (
    <Router>
      <div>
        <HeaderWithContext/> 
        <Switch>
          
          <Route exact path='/' component={CoursesWithContext}/>
          <Route path='/courses/create'component={CreateCourseWithContext}/>
          <Route path='/signup' component={UserSignUpWithContext}/>
          <Route path='/signin' component={UserSignInWithContext}/>
          <Route path='/signout' component={UserSignOutWithContext}/>
          <Route path='/courses/:id/update' component={UpdateCourseWithContext}/>
          <Route path='/courses/:id' component={CourseDetailWithContext}/>
        
         
        </Switch>
      </div>
    </Router>

  );
}

export default App;





