import ButtonBase from "@mui/material/ButtonBase"
import Divider from "@mui/material/Divider"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import ChevronRight from "@mui/icons-material/ChevronRight"
import Team from './Team'
import { extractDate, extractTime } from '../../src/utils/stringHelpers'

const GameCard = ({ game }) => {
    const { start_at, team_1, team_2 } = game
    const teams = [team_1, team_2]
    return (
        <Paper>
            <Stack direction='row'
                justifyContent='space-between'
                alignItems='center'
                component={ButtonBase}
                px={2}
                py={1}
                sx={{width: '100%', height: '100%'}}
            >
                <Stack
                    direction='row'
                    spacing={2}
                    justifyContent='space-between'
                    alignItems='center'
                    divider={<Divider orientation='vertical' flexItem />}
                    sx={{ flexGrow: 1 }}
                >
                    <Stack alignItems='center' sx={{ flexGrow: 0 }}>
                        <Typography variant='caption' sx={{ fontWeight: 'bold' }}>
                            {extractDate(start_at)}
                        </Typography>
                        <Typography variant='caption'>
                            {extractTime(start_at)}
                        </Typography>
                    </Stack>
                    <Stack
                        spacing={1}
                        divider={<Divider orientation='horizontal' flexItem />}
                        sx={{ flexGrow: 1 }}
                    >
                        {teams.map(team => (
                            <Team key={team.name} team={team} />
                        ))}

                    </Stack>
                </Stack>
                <Stack
                    justifyContent='center'
                    alignItems='center'
                    ml={1}
                    sx={{ flexGrow: 0 }}
                >
                    <ChevronRight />
                </Stack>
            </Stack>
        </Paper>
    )
}

export default GameCard