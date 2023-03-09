import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function AddNew() {
	const saveNewPost = event => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		})
	}
	console.log('Cai funkcija close modal', closeAddNewModal)
	return (
		<Container component='main' maxWidth='md'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 3,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component='h1' variant='h5'>
					Add new note
				</Typography>
				<Box component='form' noValidate onSubmit={saveNewPost} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id='title'
								label='Title'
								name='title'
								autoComplete='title'
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								autoComplete='given-name'
								name='Url'
								required
								fullWidth
								id='firstName'
								label='Url'
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField
								fullWidth
								id='timeStamp'
								label='Time stamp'
								name='stamp'
								autoComplete='time-stamp'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								id='comment'
								multiline
								maxRows={5}
								label='Comment'
								name='comment'
								autoComplete='comment'
							/>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item>
							<Button
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
								onClick={closeAddNewModal}
							>
								Cancle
							</Button>
						</Grid>
						<Grid item>
							<Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
								Save
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	)
}
