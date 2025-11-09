import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/slices/authSlice'
import { Box, Paper, Typography, Button, Alert } from '@mui/material'

const HomePage = () => {
    const user = useSelector((state: any) => state.auth.user)
    const dispatch = useDispatch()

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Основная страница
                </Typography>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                    Тоси-Боси
                </Typography>

                {user && (
                    <Alert severity="info" sx={{ mb: 2 }}>
                        Зарегистрирован: <strong>{user}</strong>
                        <Button
                            color="inherit"
                            onClick={() => dispatch(logout())}
                            sx={{ ml: 2 }}
                            size="small"
                        >
                            Выйти
                        </Button>
                    </Alert>
                )}

                {user ? (
                    <Typography variant="h6">
                        Привет, <strong>{user}</strong>!
                    </Typography>
                ) : (
                    <Typography color="text.secondary">
                        Никто не зарегистрирован. Зарегистрируйтесь!
                    </Typography>
                )}
            </Paper>
        </Box>
    )
}

export default HomePage