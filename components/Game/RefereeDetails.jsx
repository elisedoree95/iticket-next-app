import Image from 'next/image'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const RefereeDetails = ({ referee, open, closeModal }) => {
    const { name, bio, image } = referee

    return (
        <Dialog open={open} onClose={closeModal} maxWidth='xs'>
            <DialogTitle>
                Détails de l&apos;arbitre
                <IconButton
                    onClick={closeModal}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers>
                <Stack>
                    <Box width={150} height={120} mb={2}>
                        <Image src={image} alt='Arbitre' width={150} height={120} />
                    </Box>
                    <Typography variant='body2' sx={{ fontWeight: 'bold' }} gutterBottom>
                        Nom
                    </Typography>
                    <Typography>{name}</Typography>
                </Stack>
            </DialogContent>

            <DialogContent>
                <Stack>
                    <Typography variant='body2' sx={{ fontWeight: 'bold' }} gutterBottom>
                        Bio
                    </Typography>
                    <Typography>{bio}</Typography>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default RefereeDetails