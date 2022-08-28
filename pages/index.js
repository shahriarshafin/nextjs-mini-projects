import { useSession } from 'next-auth/react';
import { NoUser, UserCard } from '../components';

const Index = () => {
	const { data: session } = useSession();
	return (
		<div className='flex justify-center'>
			<div>
				<h1 className='my-10 text-5xl'>I am Home</h1>
				{session ? <UserCard {...session.user} /> : <NoUser />}
			</div>
		</div>
	);
};

export default Index;
