import React, { useState } from 'react';

const App = () => {
	const [formData, setformData] = useState({ username: '', password: '' });
	const [userLogin, setuserLogin] = useState(false);
	const [invalidLogin, setInvalidLogin] = useState(false);

	const handleInput = (e) => {
		const { name, value } = e.target;

		setformData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (formData.username == 'user' && formData.password == 'password') {
			setuserLogin(true);
		} else {
			setInvalidLogin(true);
		}
	};

	return (
		<div>
			<h1>Login page</h1>
			{userLogin ? (
				<>
					<h1>Welcome, user!</h1>
				</>
			) : (
				<>
					{invalidLogin && <h4>Invalid username or password</h4>}
					<form onSubmit={handleSubmit}>
						<label htmlFor='username'>Username:</label>
						<input
							type='text'
							name='username'
							id='username'
							placeholder='username'
							required
							value={formData.username}
							onChange={handleInput}
						/>
						<br />
						<label htmlFor='password'>Password:</label>
						<input
							type='text'
							name='password'
							id='password'
							placeholder='password'
							required
							value={formData.password}
							onChange={handleInput}
						/>
						<br />
						<button type='submit'>Submit</button>
					</form>
				</>
			)}
		</div>
	);
};

export default App;
