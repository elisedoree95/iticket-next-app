import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

const ContentWrapper = ({ children }) => {
    return (
        <Stack justifyContent='center' alignItems='center'>
            <Box p={2} sx={{ width: { xs: '100%', sm: '500px' } }}>
                {children}
            </Box>
        </Stack>
    )
}

export default ContentWrapper