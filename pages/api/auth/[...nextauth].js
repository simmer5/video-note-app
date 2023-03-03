import NextAuth from 'next-auth'

import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/lib/prisma'

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		// ...add more providers here
		CredentialsProvider({
			name: 'Credentials',

			credentials: {},
			async authorize(credentials, req) {
				const { email, password, csrfToken } = credentials

				const user = await prisma.users_tb.findFirst({
					where: { email: `${email}` },
				})

				if (!user) {
					throw new Error('Invalid Email or Password or user do not exist.')
				}

				console.log('Logas is [...nextAuth] user obj:', user)

				if (user.password !== password) {
					throw new Error('Invalid Email or Password')
				}

				return user
			},
		}),
	],
	pages: {
		signIn: '/signin',
	},
	session: {
		strategy: 'jwt',
	},
}

export default NextAuth(authOptions)
