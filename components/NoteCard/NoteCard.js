import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Title from '../Title'
import CardMedia from '@mui/material/CardMedia'

const NoteCard = ({
	title,
	date = new Date().toLocaleDateString(),
	comment,
	timeStamp = 0,
}) => {
	function preventDefault(event) {
		event.preventDefault()
	}
	return (
		<>
			<iframe
				width=''
				height=''
				src='https://www.youtube.com/embed/EhI6wb5nEEs?start=120'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen
			/>

			<Title>{title}</Title>
			<Typography component='p' variant='p'>
				{timeStamp}
			</Typography>
			<Typography component='p' variant='p'>
				{comment}
			</Typography>
			<Typography color='text.secondary' sx={{ flex: 1 }}>
				{date}
			</Typography>
		</>
	)
}

export default NoteCard
