import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { isValidInput } from '../../src/utils/stringHelpers'
import { PATTERNS } from '../../src/constants/regex'

const RecoverPasswordForm = () => {
    const [email, setEmail] = useState('')

    return (
        <Stack justifyContent='center' alignItems='center'>
            <Box component='form' p={2} sx={{ width: { xs: '100%', sm: '500px' } }} >
                <Typography variant='h4' mb={4} sx={{ textAlign: 'center' }} gutterBottom>
                    Récupération du mot de passe
                </Typography>
                <Stack spacing={2} mb={4}>
                    <TextField
                        type='text'
                        label='Email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Button
                        variant='contained'
                        type='submit'
                        disabled={!(email && isValidInput(PATTERNS.email, email))}
                    >
                        Récupérer le mot de passe
                    </Button>
                </Stack>

            </Box>
        </Stack>
    )
}

export default RecoverPasswordForm