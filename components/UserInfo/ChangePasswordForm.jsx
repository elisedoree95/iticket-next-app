import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

import { isValidInput } from "../../src/utils/stringHelpers"
import { PATTERNS } from "../../src/constants/regex"

const initialFormValues = {
    oldPassword: '',
    newPassword: '',
    repeatPassword: ''
}

const initialErrors = {
    oldPassword: false,
    newPassword: false,
    repeatPassword: false
}

const ChangePasswordForm = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialErrors)
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setshowNewPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)

    const handleInputChange = e => {
        const value = e.target.value.trim()
        setFormValues({ ...formValues, [e.target.name]: value })
    }

    const handleInputBlur = e => {
        const value = e.target.value.trim()
        value === '' || (e.target.name === 'newPassword' && !isValidInput(PATTERNS.password, value))
            ? setFormErrors({ ...formErrors, [e.target.name]: true })
            : setFormErrors({ ...formErrors, [e.target.name]: false })
    }

    const toggleShowOldPassword = () => setShowOldPassword(prev => !prev)
    const toggleShowNewPassword = () => setShowNewPassword(prev => !prev)
    const toggleShowRepeatPassword = () => setShowRepeatPassword(prev => !prev)

    const submitIsDisabled = !(
        (formValues.oldPassword) && 
        (formValues.newPassword && isValidInput(PATTERNS.password, formValues.newPassword)) && 
        (formValues.repeatPassword === formValues.newPassword)
    )

    return (
        <Stack justifyContent='center' alignItems='center'>
            <Box component='form' p={2} sx={{ width: {xs: '100%', sm: '500px'} }} >
                <Typography variant='h4' mb={4} sx={{ textAlign: 'center' }} gutterBottom>
                    Modifier le mot de passe
                </Typography>
                <Stack spacing={2} mb={4}>
                <TextField 
                        type={showOldPassword ? 'text' : 'password'} 
                        name='oldPassword'
                        label='Mot de passe actuel' 
                        value={formValues.oldPassword} 
                        error={formErrors.oldPpassword}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        helperText={formErrors.oldPassword && 'Mot de passe obligatoire'}
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>
                                <IconButton onClick={toggleShowOldPassword} >
                                    {showOldPassword ? <VisibilityOff /> : <Visibility /> }
                                </IconButton>
                            </InputAdornment>
                        }}
                    />
                    <TextField 
                        type={showNewPassword ? 'text' : 'password'} 
                        name='newPassword'
                        label='Nouveau mot de passe' 
                        value={formValues.newPassword} 
                        error={formErrors.newPassword}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        helperText={formErrors.newPassword && 'Mot de passe obligatoire'}
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>
                                <IconButton onClick={toggleShowNewPassword} >
                                    {showNewPassword ? <VisibilityOff /> : <Visibility /> }
                                </IconButton>
                            </InputAdornment>
                        }}
                    />
                    <TextField 
                        type={showRepeatPassword ? 'text' : 'password'} 
                        name='repeatPassword'
                        label='Répéter nouveau mot de passe' 
                        value={formValues.repeatPassword} 
                        error={formErrors.repeatPassword}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        helperText={formErrors.repeatPassword && 'Mot de passe obligatoire'}
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>
                                <IconButton onClick={toggleShowRepeatPassword} >
                                    {showRepeatPassword ? <VisibilityOff /> : <Visibility /> }
                                </IconButton>
                            </InputAdornment>
                        }}
                    />
                    
                    <Button
                        variant='contained'
                        type='submit'
                        disabled={submitIsDisabled} 
                    >
                        Appliquer
                    </Button>
                </Stack>
                
                <Typography sx={{ textAlign: 'center' }} gutterBottom>
                    Mot de passe oublié
                </Typography>
            </Box>
        </Stack>
    )
}

export default ChangePasswordForm