import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonBase from '@mui/material/ButtonBase'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useAuth } from '../../src/context/authContext'

const pages = [
    { label: 'Accueil', destination: '/' },
    { label: 'Matchs', destination: '/games' },
    { label: 'Paramètres', destination: '/settings' },
]

const settings = [
    { label: 'Login', destination: '/login' },
    { label: 'Créer compte', destination: '/register' },
    { label: 'Profil', destination: '/profile' },
]

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)

    const { isLoggedIn, logout } = useAuth()

    const updatedSettings = settings.filter((item, index) => isLoggedIn ? index > 1 : index < 2)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar position="static" sx={{ display: { xs: 'none', sm: 'block' }, position: 'relative' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Image src='/fecafoot.png' alt='Logo fecafoot' width={32} height={32} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link key={page.label} href={page.destination} passHref>
                                    <MenuItem component={ButtonBase} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.label}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        align='center'
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Image src='/fecafoot.png' alt='Logo fecafoot' width={32} height={32} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link key={page.label} href={page.destination} passHref>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#eeeeee', display: 'block' }}
                                >
                                    {page.label}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        <Typography variant='subtitle2' mr={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                            Vous êtes {isLoggedIn ? 'connecté' : 'déconnecté'}
                        </Typography>
                        <Tooltip title="Ouvrir Paramètres">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <AccountCircleIcon color='white' sx={{transform: 'scale(1.5)'}} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {updatedSettings.map((setting) => (
                                <MenuItem
                                    component={ButtonBase}
                                    key={setting.label}
                                    href={setting.destination}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography align="center">
                                        {setting.label}
                                    </Typography>
                                </MenuItem>
                            ))}
                            {isLoggedIn && (
                                <MenuItem
                                    component={ButtonBase}
                                    onClick={() => {handleCloseUserMenu(); logout() }}
                                >
                                    <Typography align='center'>
                                        Logout
                                    </Typography>
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar