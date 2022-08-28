import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google';
export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}), GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET
		  })
		// ...add more providers here
	],
	// session: {
	// 	jwt: true, // by default true
	// 	maxAge: 5,  // user automatic loged out after 5 sec
	// },
});
