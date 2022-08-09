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
//import CourseDetail from './Components/CourseDetail';


import withContext from './Context';

const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CoursesWithContext = withContext(Courses)



function App() {




 //The effect happens after render
 useEffect(() => {   
 fetch('http://localhost:5000/api/courses')
 .then((res) => res.json())
 .then((data) => console.log(data));
});

//Rohald helped with CourseDetail Route
//<Route path='/courses/:id' component={CourseDetail}/>

  return (
    <Router>
      <div>
        <HeaderWithContext/> 
        <Switch>
          
          //<Route path='/' component={CoursesWithContext}/>
          <Route path='/signup' component={UserSignUpWithContext}/>
          <Route path='/signin' component={UserSignInWithContext}/>
          <Route path='/signout' component={UserSignOutWithContext}/>
          
     
         
        </Switch>
      </div>
    </Router>

  );
}

export default App;





