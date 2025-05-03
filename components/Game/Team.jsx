import Image from 'next/image'
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Team = ({ team }) => {
    return (
        <Stack direction='row' spacing={1} alignItems='center'>
            <Box>
                <Image src={team.logo} alt={`${team.name} logo`} width={25} height={25} />
            </Box>
            <Typography variant='caption' noWrap>
                {team.name}
            </Typography>
        </Stack>
    )
}

export default Team