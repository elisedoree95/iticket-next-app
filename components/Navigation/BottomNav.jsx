import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import Paper from '@mui/material/Paper'
import SettingsIcon from '@mui/icons-material/Settings'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import { LINK_PATHS } from '../../src/constants/linkPaths'

const BottomNav = () => {
    let pathname
    if (typeof window !== "undefined") {
        pathname = window.location.pathname
    }
    const [value, setValue] = useState('')
    const { home, games, settings } = LINK_PATHS

    useEffect(() => {
        setValue(pathname)
    }, [pathname])
    
    const router = useRouter()

    return (
        <Paper sx={{ color: 'primary', position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: 'block', sm: 'none' } }} elevation={3}>
            <BottomNavigation
                color='primary'
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            >
                <BottomNavigationAction
                    label={home.label}
                    value={home.destination}
                    onClick={() => router.push(home.destination)}
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    label={games.label}
                    value={games.destination}
                    onClick={() => router.push(games.destination)}
                    icon={<SportsSoccerIcon />}
                />
                <BottomNavigationAction
                    label={settings.label}
                    value={settings.destination}
                    onClick={() => router.push(settings.destination)}
                    icon={<SettingsIcon />}
                />
            </BottomNavigation>
        </Paper>
    )
}

export default BottomNav