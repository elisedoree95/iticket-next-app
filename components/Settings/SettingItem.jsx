import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SettingItem = ({ item }) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(item.destination)
    }

    return (
        <Paper>
            <Stack 
                onClick={handleClick} 
                component={ButtonBase}
                height={50} 
                px={2} 
                direction='row' 
                alignItems='center' 
                justifyContent='space-between'
                sx={{cursor: 'pointer'}}
            >
                <Typography>
                    {item.label}
                </Typography>
                <Box>
                    <ChevronRightIcon />
                </Box>
            </Stack>
        </Paper>
    )
}

export default SettingItem