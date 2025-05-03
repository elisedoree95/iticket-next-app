import { useState } from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonBase from '@mui/material/ButtonBase'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import ChevronRight from '@mui/icons-material/ChevronRight';
import SportsSoccer from '@mui/icons-material/SportsSoccer';
import Stadium from '@mui/icons-material/Stadium';
import RefereeDetails from './RefereeDetails';
import { extractDate, extractTime } from '../../src/utils/stringHelpers';


const GameDetails = ({ detail }) => {
  const { banner, description, start_at, referee, stadium, competition } = detail
  const dateAndTime = `${extractDate(start_at)}, ${extractTime(detail.start_at)}`

  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <>
      <Box sx={{ position: 'relative', height: { xs: '100px', sm: '170px' } }}>
        <Image src={banner} alt='game banner' layout='fill' />
      </Box>
      <Stack
        spacing={2}
        mt={3}
        divider={<Divider orientation='horizontal' flexItem />}
      >
        <Stack direction='row' spacing={1} alignItems='center'>
          <Typography align='center' sx={{ textTransform: 'uppercase', flexGrow: 1 }} >
            {description}
          </Typography>
        </Stack>

        <Stack direction='row' spacing={1} alignItems='center'>
          <Box sx={{ flexGrow: 0 }}>
            <CalendarMonth />
          </Box>
          <Typography sx={{ textTransform: 'uppercase', flexGrow: 1 }} >
            {dateAndTime}
          </Typography>
        </Stack>

        <Stack 
          component={ButtonBase} 
          direction='row' 
          spacing={1} 
          alignItems='center'
          onClick={openModal}
        >
          <Box sx={{ flexGrow: 0 }}>
            <Image src='/whistle.png' alt='whistle' width={25} height={25} />
          </Box>
          <Typography align='left' sx={{ textTransform: 'uppercase', flexGrow: 1 }} >
            {referee.name}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <ChevronRight />
          </Box>
        </Stack>

        <Stack direction='row' spacing={1} alignItems='center'>
          <Box sx={{ flexGrow: 0 }}>
            <Stadium />
          </Box>
          <Typography sx={{ textTransform: 'uppercase', flexGrow: 1 }} >
            {stadium.name}
          </Typography>
        </Stack>

        <Stack direction='row' spacing={1} alignItems='center'>
          <Box sx={{ flexGrow: 0 }}>
            <SportsSoccer />
          </Box>
          <Typography sx={{ textTransform: 'uppercase', flexGrow: 1 }} >
            {competition.name}
          </Typography>
        </Stack>

        <Box></Box>
      </Stack>
      <Button variant='contained'>Réserver un ticket</Button>
      <RefereeDetails referee={referee} open={open} closeModal={closeModal} />
    </>
  )
}

export default GameDetails