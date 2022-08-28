import Image from 'next/image';

const UserCard = ({ name, image, email }) => {
	return (
		<div className='my-10 w-96 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
			<div className='flex justify-end px-4 pt-4'>
				<button
					id='dropdownButton'
					data-dropdown-toggle='dropdown'
					className='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5'
					type='button'
				>
					<svg
						className='w-6 h-6'
						aria-hidden='true'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
					</svg>
				</button>
				{/* Dropdown menu */}
				<div
					id='dropdown'
					className='z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block'
					data-popper-reference-hidden=''
					data-popper-escaped=''
					data-popper-placement='bottom'
					style={{
						position: 'absolute',
						inset: '0px auto auto 0px',
						margin: 0,
						transform: 'translate(446px, 83px)',
					}}
				></div>
			</div>
			<div className='flex flex-col items-center pb-10'>
				<div className='relative w-20 h-20'>
					<Image
						src={image}
						alt=''
						layout='fill'
						objectFit='contain'
						className='rounded-full'
					/>
				</div>
				<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
					{name}
				</h5>
				<span className='text-sm text-gray-500 dark:text-gray-400'>
					{email}
				</span>
				<div className='flex mt-4 space-x-3 md:mt-6'>
					<a
						href='#'
						className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Add friend
					</a>
					<a
						href='#'
						className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'
					>
						Message
					</a>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
