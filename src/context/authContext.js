import { createContext, useCallback, useContext, useState } from 'react'
import axios from 'axios'
import { BASE_URL, ENDPOINTS } from '../constants/endpoints'
import useLocalStorage from '../utils/useLocalStorage'

axios.defaults.baseURL = BASE_URL

const authContext = createContext()

export const useAuth = () => useContext(authContext)

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isVerified, setIsVerified] = useState(false)
    const [loading, setLoading] = useState(false)
    const [token, setToken, clearToken] = useLocalStorage('token')
    const [storedLogin, setStoredLogin, clearStoredLogin] = useLocalStorage('stored_login')

    const login = async (payload) => {
        setLoading(true)
        const email = payload.email ? payload.email : payload.phone
        const password = payload.password
        try {
            const {data} = await axios.post(ENDPOINTS.login, {email, password})
            if (payload.remember === true) setStoredLogin(email)
            else clearStoredLogin()
            if (data.status === 200) {
                setIsLoggedIn(true)
                setToken(data.data.token)
                setIsVerified(data.data.otp_verified)
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const register = async (payload) => {
        setLoading(true)
        let formData = new FormData()

        const readyPayload = {
            first_name: payload.firstName,
            last_name: payload.lastName,
            email: payload.email,
            id_type: payload.idType.idKey,
            id_number: payload.idNumber,
            phone_number: payload.phone,
            password: payload.password,
            password_1: payload.password,
            id_card_face_1: payload.cardFace1,
            id_card_face_2: payload.cardFace2,
            passport_image: payload.cardFace2,
        }

        for (const key in readyPayload) {
            formData.append(key, readyPayload[key])
        }

        try {
            const response = await axios.post(ENDPOINTS.signup, formData)
            console.log(response)
            if (response.status === 200) {
                console.log('first')
                // handle redirection to login
            }
        } catch (error) {
            console.log(error)
        }
        console.log(payload)
        setLoading(false)
    }

    const logout = async () => {
        if (isLoggedIn) {
            clearToken()
            setIsLoggedIn(false)
        }
    }

    const checkToken = useCallback(() => {
        if (token && token !== '') setIsLoggedIn(true)
    }, [token])

    const value = {
        isLoggedIn,
        isVerified,
        loading,
        login,
        register,
        logout,
        checkToken,
        storedLogin
    }

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}