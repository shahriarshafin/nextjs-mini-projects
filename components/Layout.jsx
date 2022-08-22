import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<main className='max-w-3xl mx-auto'>
				<Navbar />
				{children}
			</main>
		</>
	);
};

export default Layout;
