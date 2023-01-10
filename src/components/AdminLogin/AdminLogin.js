import React, { useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import './AdminLogin.css'


const AdminLogin = () => {
  
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');

  const [aid, setAid] = useState(0);

  // Handling the name change
  const handleUname = (e) => {
	setUname(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
	setPassword(e.target.value);
};


  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const navigate = useNavigate();

  const fetchData = async() => {
    let res= await fetch('https://flight-cargo-server.onrender.com/login/admin',
    {
    headers: {
    'Content-type': 'application/json'
    }, method: 'POST',
    body: JSON.stringify({ 
      username : uname,
      password:password,
    })
    })
    .then (response => response.json())
    .then (data=>setAid(data[0].aid));
    // console.log(res.json()); 
    console.log(aid);
    if (aid) {
        alert("Succesfully Logged In!")
      setIsSubmitted(true);
      navigate('/adminpage');
      // if (userData.password !== pass.value) {
      //   // Invalid password
      //   setErrorMessages({ name: "pass", message: errors.pass });
      // } else {
      // }
    } else {
      // alert("INVALID USER CREDENTIALS!")
      // Username not found
      // setErrorMessages({ name: "uname", message: errors.uname });
    }
    
  }


  useEffect(() => {
    localStorage.setItem('aid', JSON.stringify(aid));
  }, [aid]);  

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    fetchData();



    // var { uname, pass } = document.forms[0];

    // Find user login info
    // const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Admin Username </label>
          <input type="text" onChange={handleUname} name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Admin Password </label>
          <input type="password" onChange={handlePassword} name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="LoginForm">
      <div className="login-form">
        <div className="title">Admin Login In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );

}

export default AdminLogin