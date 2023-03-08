import * as React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

export default function TagChip({ tag }) {
	const handleDelete = () => {
		console.info('You clicked the delete icon.')
	}

	return <Chip label={tag} variant='outlined' onDelete={handleDelete} />
}
