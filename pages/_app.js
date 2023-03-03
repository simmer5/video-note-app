import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<ThemeProvider theme={darkTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	)
}
