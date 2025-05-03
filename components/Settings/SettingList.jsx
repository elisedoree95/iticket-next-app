import Typography from "@mui/material/Typography"
import Stack from '@mui/material/Stack';


import SettingItem from "./SettingItem"

const settingsItems = [
    { label: 'Tickets', destination: '/tickets' },
    { label: 'A Propos', destination: '/about' },
    { label: 'Nous contacter', destination: '/contact-us' },
    { label: 'Politique de sécurité', destination: '/policy' },
    { label: 'Login', destination: '/login' },
]

const SettingList = () => {
    return (
        <>
            <Typography variant='h4' align='center' gutterBottom>
                Paramètres
            </Typography>
            <Stack spacing={3}>
                {settingsItems.map((item, index) => (
                    <SettingItem key={index} item={item} />
                ))}

            </Stack>
        </>
    )
}

export default SettingList