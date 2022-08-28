/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
	},
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = nextConfig;
