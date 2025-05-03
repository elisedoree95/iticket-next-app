import Link from 'next/link'
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import GameCard from "./GameCard"

const GameList = ({ games }) => {
    return (
        <Stack spacing={2}>
            <Typography variant='h4' color='primary' align='center'>
                Tous les matchs
            </Typography>
            <Stack spacing={2}>
                {games.map(game => (
                    <Link
                        key={game.id}
                        href={`/games/${game.id}`}
                        passHref
                    >
                        <a style={{ textDecoration: 'none' }}>
                            <GameCard key={game.id} game={game} />
                        </a>
                    </Link>
                ))}
            </Stack>
        </Stack>
    )
}

export default GameList