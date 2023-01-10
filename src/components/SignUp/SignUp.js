import { useState } from 'react';
import "./SignUp.css"

export default function SignUp() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [gender, setGender] = useState('');
const [age, setAge] = useState(0);


// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the gender change
const handleGender = (e) => {
	setGender(e.target.value);
	setSubmitted(false);
};

// Handling the age change
const handleAge = (e) => {
	setAge(e.target.value);
	setSubmitted(false);
};


const addNewUser=async ()=>{
	console.log(name);
	let res = await fetch("https://flight-cargo-server.onrender.com/register", {
	headers: {
		'Content-type': 'application/json'
	}, 
	method: "POST",
	body: JSON.stringify({
		username:name,
		userage:age,
		usergender:gender,
		password: password,
		email: email,
	}),
	});

	// let resJson = await res.json();
	console.log(res);
	if (res.status === 201) {
        setName("");
        setEmail("");
        setPassword("");
        // setGender("");
        setAge(0);
      } else {
        // setMessage("Some error occured");
      }
}

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {


	setSubmitted(true);
	setError(false);

	addNewUser();

	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1 className='newUserTitle'>New User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		<label className="label">Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label className="label">Age</label>
		<input onChange={handleAge} className="input"
		value={age} type="number" />

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

		<div className="gender">
			<label for="gender" /><b>Gender</b><label/>
			<br></br>
			<div className='genderLabels'>
				<input type="radio" id="male" name="gender" onChange={handleGender} value="male"/>
				<label for="male" >MALE</label>
				<input type="radio" id="female" name="gender" onChange={handleGender} value="female"/>
				<label for="female" >FEMALE</label>
				<input type="radio" id="Transgender" name="gender" onChange={handleGender} value="transgender"/>
				<label for="transgender" >TRANSGENDER</label>
			</div>
		</div>

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
