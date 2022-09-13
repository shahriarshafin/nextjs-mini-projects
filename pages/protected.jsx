import { useSession } from 'next-auth/react';

const Protected = () => {
	const { data: session, status } = useSession({ required: true });
	if (status === 'loading') {
		return (
			<>
				<h1 className='text-center text-2xl my-10'>loading...</h1>
			</>
		);
	}
	return (
		<>
			<h1 className='text-center text-2xl my-10'>
				Welcome to the protected page
			</h1>
		</>
	);
};

export default Protected;
