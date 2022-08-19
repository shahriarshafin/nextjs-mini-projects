const Index = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			name: e.target.username.value,
			password: e.target.password.value,
		};
		const JSONdata = JSON.stringify(data);

		const response = await fetch('http://localhost:4000/posts', {
			body: JSONdata,
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});
	};

	return (
		<>
			<div className='mx-auto w-full max-w-xs'>
				<form
					onSubmit={handleSubmit}
					className='mt-20 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
				>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='username'
						>
							Username
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='username'
							type='text'
							name='username'
							placeholder='Username'
						/>
					</div>
					<div className='mb-6'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='password'
						>
							Password
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='password'
							type='password'
							name='password'
							placeholder='******************'
						/>
					</div>
					<div className='flex items-center justify-between'>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='submit'
						>
							Sign In
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Index;
