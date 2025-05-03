import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import GameCard from '../Game/GameCard'

const Competition = ({ competition }) => {
    const { games } = competition

    return (
        <Stack spacing={2}>
            <Stack direction='row' alignItems='center' spacing={1}>
                <Box>
                    <SportsSoccerIcon />
                </Box>
                <Typography sx={{ flexGrow: 1 }}>
                    {competition.name} - {competition.type}
                </Typography>
                <Box sx={{ flexGrow: 0, display: games.length > 0 ? 'block' : 'none' }}>
                    <Button
                        size='small'
                        variant='outlined'
                        sx={{ borderRadius: 99, fontSize: '.7rem' }}
                    >
                        Voir plus
                    </Button>
                </Box>
            </Stack>
            <Stack spacing={2}>
                {
                    games.length > 0
                        ? games.map(game => (
                            <Link
                                key={game.id}
                                href={`/games/${game.id}`}
                                passHref
                            >
                                <a style={{ textDecoration: 'none' }}>
                                    <GameCard key={game.id} game={game} />

                                </a>

                            </Link>
                        ))
                        : (
                            <Typography variant='caption' sx={{ fontStyle: 'italic' }}>
                                Pas de match dans cette compétition
                            </Typography>
                        )
                }
            </Stack>
        </Stack>
    )
}

export default Competition