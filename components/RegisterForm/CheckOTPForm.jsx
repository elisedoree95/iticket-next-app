import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const CheckOTPForm = () => {
    const [otp, setOtp] = useState('')

    return (
        <Stack justifyContent='center' alignItems='center'>
            <Box component='form' p={2} sx={{ width: {xs: '100%', sm: '500px'} }} >
                <Typography variant='h4' sx={{ textAlign: 'center' }} gutterBottom>
                    Vérification
                </Typography>
                <Paper sx={{maxWidth: '60%', marginBlock: '2rem', marginInline: 'auto'}}>
                    <Typography variant='subtitle2' sx={{ textAlign: 'center' }} >
                        Veuillez entrer le code à 05 chiffres que vous avez reçu par SMS
                    </Typography>
                </Paper>
                <Stack spacing={2} mb={4}>
                    <TextField
                        type='text'
                        name='credential'
                        onChange={e => setOtp(e.target.value)}
                        inputProps={{maxLength: 5, textAlign: 'center'}}
                    />
                    
                    <Button
                        variant='contained'
                        type='submit'
                        disabled={otp.length !== 5}
                    >
                        Confirmer
                    </Button>
                </Stack>
                
                <Typography sx={{ textAlign: 'center' }} pt={12}>
                    <Button variant="text">Renvoyer le code</Button>
                </Typography>
            </Box>
        </Stack>
    )
}

export default CheckOTPForm