export const BASE_URL = 'http://iticket.anlabs.net/api/v1'

export const ENDPOINTS = {
    competitions: '/home/competitions',
    competitionDetails: (compId) => `/competition/${compId}`,
    games: '/home/games',
    gameDetails: (gameId) => `/games/${gameId}`,
    
    login: '/auth/login',
    signup: '/auth/signup',
    confirmOtp: '/auth/confirmOtp',
    resendOtp: '/auth/resendOtp'
}