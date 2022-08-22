import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCreativeCommonsZero } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
const Navbar = () => {
	const { data: session } = useSession();
	console.log(session);
	return (
		<nav className='bg-gray-800 text-white px-6 py-3 w-full flex justify-between items-center'>
			<div className='mb-2 sm:mb-0'>
				<Link href='/'>
					<a className='text-2xl font-bold'>
						<div className='flex items-center'>
							<FaCreativeCommonsZero />
							<p>Auth</p>
						</div>
					</a>
				</Link>
			</div>
			<div>
				<a
					href='/one'
					className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'
				>
					One
				</a>
				<a
					href='/two'
					className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'
				>
					Two
				</a>
				<a
					href='/three'
					className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'
				>
					Three
				</a>
			</div>
			<div>
				{session ? (
					<>
						<div className='gap-2 flex items-center'>
							<div className='relative w-10 h-10'>
								<Image
									src={session.user.image}
									alt=''
									layout='fill'
									objectFit='contain'
									className='rounded-full'
								/>
							</div>
							<button onClick={() => signOut()}>
								<FiLogOut className='text-2xl' />
							</button>
						</div>
					</>
				) : (
					<button
						onClick={() => signIn('google')}
						className='px-4 py-2 rounded-md bg-red-500 hover:bg-red-700 focus:bg-red-400'
					>
						Sign in
					</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
