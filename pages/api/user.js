import prisma from '../../lib/prisma'

// POST /api/user
// Required fields in body: email, password
export default async function handle(req, res) {
	const result = await prisma.User_tb.create({
		data: {
			...req.body,
		},
	})
	console.log('Response result', result)
	res.json(result)
}
