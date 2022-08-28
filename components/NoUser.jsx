const NoUser = () => {
	return (
		<div
			className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
			role='alert'
		>
			<strong className='font-bold'>User Not Found!</strong>
			<span className='block sm:inline'> Please Login First</span>
		</div>
	);
};

export default NoUser;
