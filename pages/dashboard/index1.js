import Router from 'next/router'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

const dashboard = () => {
	const session = useSession()

	console.log('Session is Dashboard puslapio', session)

	useEffect(() => {
		if (session.status === 'unauthenticated') Router.replace('/signin')
	}, [session.status])

	if (session.status === 'authenticated') {
		return (
			<div>
				Dashboard apsaugotas {'\n'} {JSON.stringify(session.data)}
			</div>
		)
	}

	return <h1>loading...</h1>
}

export default dashboard
