// //Stateful Component 

import React, { useState, useEffect} from "react";


export default function Courses() {

   
   
   
    useEffect(() => {   
        fetch('http://localhost:5000/api/courses')
        .then((res) => res.json())
        .then((data) => console.log(data));
       });


  
    return(

<body>
    <div id="root">
        <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a href="index.html">Courses</a></h1>
                <nav>
                    <ul class="header--signedout">
                        <li><a href="sign-up.html">Sign Up</a></li>
                        <li><a href="sign-in.html">Sign In</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <div class="wrap main--grid">
                <a class="course--module course--link" href="course-detail.html">
                    <h2 class="course--label">Course</h2>
                    <h3 class="course--title">Build a Basic Bookcase</h3>
                </a>
                <a class="course--module course--link" href="course-detail.html">
                    <h2 class="course--label">Course</h2>
                    <h3 class="course--title">Learn How to Program</h3>
                </a>
                <a class="course--module course--link" href="course-detail.html">
                    <h2 class="course--label">Course</h2>
                    <h3 class="course--title">Learn How to Test Programs</h3>
                </a>
                <a class="course--module course--add--module" href="create-course.html">
                    <span class="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" class="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                </a>
            </div>
        </main>
    </div>
</body>

     )
 }