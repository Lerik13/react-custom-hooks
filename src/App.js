import React, { useState } from 'react';
import useInput from './hooks/useInput';

const App = () => {
	const userName = useInput('')
	const password = useInput('')

	return (
		<div>
			<input {...userName} type="text" placeholder="User Name"/>
			<input {...password} type="text" placeholder="Password"/>
			<button onClick={() => console.log(userName.value, password.value)}>Show Value</button>
		</div>
	);
};

export default App;
