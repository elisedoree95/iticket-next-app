import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import NativeSelect from '@mui/material/NativeSelect'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

import FileInput from "./FileInput"
import { isValidInput } from "../../src/utils/stringHelpers"
import { PATTERNS } from "../../src/constants/regex"
import { useAuth } from "../../src/context/authContext"

const ID_OPTIONS = [
    { idKey: 'ID_CARD', label: 'CNI' },
    { idKey: 'ID_PASSPORT', label: 'Passeport' },
    { idKey: 'ID_RESIDENCE_CARD', label: 'Carte de séjour' },
]

const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    idType: ID_OPTIONS[0],
    idNumber: '',
    cardFace1: null,
    cardFace2: null,
    phone: '',
    password: '',
    passwordRepeat: ''
}

const initialErrors = {
    lastName: false,
    email: false,
    idNumber: false,
    phone: false,
    password: false,
    passwordRepeat: false
}

const RegisterForm = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialErrors)
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)
    const router = useRouter()

    const { register, isLoggedIn, checkToken } = useAuth()

    useEffect(() => {
        checkToken()
        if (isLoggedIn) router.push('/')
    }, [isLoggedIn, checkToken, router])

    const handleInputChange = e => {
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value.trim()
        setFormValues({ ...formValues, [e.target.name]: value })
    }

    const handleFileChange = e => {
        const [file] = Array.from(e.target.files)
        setFormValues({ ...formValues, [e.target.name]: file })
    }

    const handleInputBlur = e => {
        const value = e.target.value.trim()
        value === '' || (e.target.name === 'password' && !isValidInput(PATTERNS.password, value))
            ? setFormErrors({ ...formErrors, [e.target.name]: true })
            : setFormErrors({ ...formErrors, [e.target.name]: false })
    }

    const toggleShowPassword = () => setShowPassword(prev => !prev)
    const toggleShowRepeatPassword = () => setShowRepeatPassword(prev => !prev)

    const submitIsDisabled = !(
        (formValues.lastName && isValidInput(PATTERNS.name, formValues.lastName)) &&
        (formValues.email && isValidInput(PATTERNS.email, formValues.email)) &&
        (formValues.idNumber && isValidInput(PATTERNS.idNumber, formValues.idNumber)) &&
        (formValues.phone && isValidInput(PATTERNS.phone, formValues.phone)) &&
        (formValues.password && isValidInput(PATTERNS.password, formValues.password)) &&
        (formValues.password === formValues.passwordRepeat)
    )

    const handleRegister = e => {
        e.preventDefault()

        register({ ...formValues })
        setFormValues(initialFormValues)
        setFormErrors(initialErrors)
    }

    return (
        <Box component='form' onSubmit={handleRegister} >
            <Typography variant='h4' sx={{ textAlign: 'center' }} gutterBottom>
                Créer nouveau compte
            </Typography>

            <Stack spacing={2} mb={4}>
                <TextField
                    type='text'
                    name='firstName'
                    label='Prénom'
                    value={formValues.firstName}
                    onChange={handleInputChange}
                />
                <TextField
                    type='text'
                    name='lastName'
                    label='Nom'
                    value={formValues.lastName}
                    error={formErrors.lastName}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    helperText={formErrors.lastName && 'Champ obligatoire'}
                />
                <TextField
                    type='text'
                    name='email'
                    label='Email'
                    value={formValues.email}
                    error={formErrors.email}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    helperText={formErrors.email && 'Saisir une adresse mail valide'}
                />


                <FormControl>
                    <InputLabel variant="standard" htmlFor="id-select">Type ID</InputLabel>
                    <NativeSelect
                        defaultValue={ID_OPTIONS[0]}
                        onChange={handleInputChange}
                        inputProps={{
                            name: 'idType',
                            id: 'id-select'
                        }}
                    >
                        {ID_OPTIONS.map((opt, index) => (
                            <option key={index} value={opt.idKey}>{opt.label}</option>
                        ))}
                    </NativeSelect>
                </FormControl>

                <TextField
                    type='text'
                    name='idNumber'
                    label='Numéro ID'
                    value={formValues.idNumber}
                    error={formErrors.idNumber}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    helperText={formErrors.idNumber && 'Champ obligatoire'}
                />

                <FileInput 
                    label={'Carte face 1'} 
                    fileName={formValues.cardFace1?.name}
                    inputName={'cardFace1'} 
                    handleFileChange={handleFileChange} 
                />
                <FileInput 
                    label={'Carte face 2'} 
                    fileName={formValues.cardFace2?.name}
                    inputName={'cardFace2'} 
                    handleFileChange={handleFileChange} 
                />

                <TextField
                    type='text'
                    name='phone'
                    label='Numéro de téléphone'
                    value={formValues.phone}
                    error={formErrors.phone}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    helperText={formErrors.phone && 'Saisir un numéro valide'}
                />
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    label='Mot de passe'
                    value={formValues.password}
                    error={formErrors.password}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    helperText={
                        formErrors.password && '8-15 caractères. Inclure minuscules, majuscules, chiffres et caractères spéciaux'
                    }
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>
                            <IconButton onClick={toggleShowPassword} >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }}
                />
                <TextField
                    type={showRepeatPassword ? 'text' : 'password'}
                    name='passwordRepeat'
                    label='Répéter mot de passe'
                    value={formValues.passwordRepeat}
                    error={formErrors.passwordRepeat}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    helperText={formErrors.passwordRepeat && 'Les deux mots de passe doivent être identiques'}
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>
                            <IconButton onClick={toggleShowRepeatPassword} >
                                {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }}
                />

                <Button
                    variant='contained'
                    type='submit'
                    disabled={submitIsDisabled}
                >Créer mon compte</Button>
            </Stack>
            <Typography sx={{ textAlign: 'center' }}>
                <Button variant="text">Login</Button>
            </Typography>
        </Box>
    )
}

export default RegisterForm