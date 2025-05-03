export const LINK_PATHS = {
    home: {
        label: 'Accueil', 
        destination: '/', 
        protected: false
    },
    games: {
        label: 'Matchs', 
        destination: '/games', 
        protected: false
    },
    settings: {
        label: 'Paramètres', 
        destination: '/settings', 
        protected: false
    },
    profile: {
        label: 'Profil', 
        destination: '/profile', 
        protected: true
    },
    login: {
        label: 'Login', 
        destination: '/login', 
        protected: false
    },
    register: {
        label: 'Créer compte', 
        destination: '/register', 
        protected: false
    },
    recoverPassword: {
        label: 'Récupérer mot de passe', 
        destination: '/recover-password', 
        protected: false
    },
    editProfile: {
        label: 'Modifier profil', 
        destination: '/edit-profile', 
        protected: true
    },
    editPassword: {
        label: 'Modifier mot de passe', 
        destination: '/edit-password', 
        protected: true
    },
}