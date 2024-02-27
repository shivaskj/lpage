// Filename - Form.js
import './form.css';
import { useState } from "react";

export default function Form() {
	// States for registration
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const [inputError, setInputError] = useState('Must be at least 8 characters');
	const [emailError, setemailError] =useState('Email should be valid');

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		const value=e.target.value;
		setSubmitted(false);
		if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
			setemailError('Email should be valid');
		}
		else{
			setemailError(null);
		}
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		const value = e.target.value;
		setSubmitted(false);

		if (value.length < 8) {
			setInputError('Must be at least 8 characters');
		  } else {
			setInputError(null);
		  }
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		// if (password.length >= 5) {
		// 	// submit form
		//   } else {
		// 	setInputError('Input must be at least 5 characters');
		//   }
		if (name === "" || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) || password.length < 8) {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	// Showing success message
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? "" : "none",
				}}
			>
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
					display: error ? "" : "none",
				}}
			>
				<h1>Please enter all the fields correctly</h1>
			</div>
		);
	};

	return (
		<div className="form">
			<div>
				<h1>Sign up</h1>
			</div>

			


			<form className='formdata'>
				
				<div><label className="label">Name<sup>*</sup><br /></label>
               
				<input
					onChange={handleName}
					className="input"
                    placeholder='Enter your name'
					value={name}
					type="text"
				/>
                </div>

                <div><label className="label">Email<sup>*</sup></label>
                <br />
				<input
					onChange={handleEmail}
					className="input"
                    placeholder='Enter your email'
					value={email}
					type="email"
				/>
				{ <div style={{ color: 'black' }}>{emailError}</div>}
                </div>

				<div><label className="label">Password<sup>*</sup></label>
                <br />
				<input
					onChange={handlePassword}
					className="input"
                    placeholder='Create password'
					value={password}
					type="password"
				/>
				{ <div style={{ color: 'black' }}>{inputError}</div>}
                </div>
				

				<button onClick={handleSubmit} className="btn" type="submit">
					Create Account
				</button>
			</form>
            <div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>
		</div>
	);
}
