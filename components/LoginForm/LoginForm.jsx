import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

import { isValidInput } from "../../src/utils/stringHelpers"
import { PATTERNS } from "../../src/constants/regex"
import { useAuth } from "../../src/context/authContext"

const initialFormValues = {
    credential: '',
    password: '',
    remember: false
}

const initialErrors = {
    credential: false,
    password: false
}

const LoginForm = () => {
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialErrors)
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()

    const { login, isLoggedIn, checkToken, storedLogin } = useAuth()

    useEffect(() => {
        checkToken()
        if (isLoggedIn) router.push('/')
    }, [isLoggedIn, checkToken, router])

    useEffect(() => {
        if (storedLogin) setFormValues({...formValues, credential: storedLogin, remember: true})
    }, [storedLogin])

    // Login can be either an email address or a phone number
    useEffect(() => {
        if (formValues.credential && isValidInput(PATTERNS.email, formValues.credential)) {
            setEmail(formValues.credential)
            setPhone(null)
        }
        if (formValues.credential && isValidInput(PATTERNS.phone, formValues.credential)) {
            setEmail(null)
            setPhone(formValues.credential)
        }
    }, [formValues.credential])

    const handleInputChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value.trim()
        setFormValues({ ...formValues, [e.target.name]: value })
    }

    const toggleShowPassword = () => setShowPassword(prev => !prev)

    const handleInputBlur = e => {
        const value = e.target.value.trim()
        value === ''
            ? setFormErrors({ ...formErrors, [e.target.name]: true })
            : setFormErrors({ ...formErrors, [e.target.name]: false })
    }

    const handleLogin = e => {
        e.preventDefault()

        login({ email, phone, password: formValues.password, remember: formValues.remember })
        setFormValues(initialFormValues)
        setFormErrors(initialErrors)
    }

    return (
        <Box
            component='form'
            sx={{
                backgroundImage: `url(${'/maillot.png'})`,
                backgroundPosition: 'bottom center',
                backgroundSize: '150px',
                backgroundRepeat: 'no-repeat'
            }}
            onSubmit={handleLogin}
        >
            <Typography variant='h4' sx={{ textAlign: 'center' }} gutterBottom>
                Login
            </Typography>
            <Stack spacing={2} mb={4}>
                <TextField
                    type='text'
                    name='credential'
                    label='Numéro de téléphone ou email'
                    value={formValues.credential}
                    error={formErrors.credential}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    helperText={formErrors.credential && 'Champ obligatoire'}
                />
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    label='Mot de passe'
                    value={formValues.password}
                    error={formErrors.password}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    helperText={formErrors.password && 'Mot de passe obligatoire'}
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>
                            <IconButton onClick={toggleShowPassword} >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }}
                />
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={formValues.remember} />}
                        name='remember'
                        label='Remember me'
                        value={formValues.remember}
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <Button
                    variant='contained'
                    type='submit'
                    disabled={(email === null && phone === null) || formValues.password === ''}
                >
                    Login
                </Button>
            </Stack>
            <Typography sx={{ textAlign: 'center' }} gutterBottom>
                <Button color='secondary_variant' href='/recover-password'>
                    Mot de passe oublié
                </Button>
            </Typography>
            <Typography sx={{ textAlign: 'center' }} pt={12}>
                <Button variant="text" href='./register'>
                    Créer nouveau compte
                </Button>
            </Typography>
        </Box>
    )
}

export default LoginForm