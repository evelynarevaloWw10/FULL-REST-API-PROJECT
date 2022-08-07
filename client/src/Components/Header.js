//Stateless Component

import React from 'react';
import { Link } from 'react-router-dom';
import UserSignUp from './UserSignUp'; 
import UserSignIn from './UserSignIn';


function Header () {
    const { context } = this.props;
    const authUser = context.authenticatedUser;    


    //https://magic.reactjs.net/htmltojsx.htm
    var NewComponent = React.createClass({
      render: function() {
        return (
    
          <div classname="header">
            <div classname="bounds">
              <h1 classname="header--logo">MyAuth</h1>
              <nav>
                {'{'}authUser ? (
                <react.fragment>
                  <span>Welcome, {'{'}authUser.name{'}'}!</span>
                  <link to="/signout" />Sign Out
                </react.fragment>
                ) : (
                <react.fragment>
                  <link classname="signup" to="/signup" />Sign Up
                  <link classname="signin" to="/signin" />Sign In
                </react.fragment>
                ){'}'}
              </nav>
            </div>
          </div>
        );
      }
    });


   };

   export default Header;