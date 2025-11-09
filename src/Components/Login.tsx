import { useSelector } from 'react-redux'
import { Box, Paper, Typography, TextField, Button, Alert } from '@mui/material'

const Login = () => {
    const user = useSelector((state: any) => state.auth.user)

    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Вход
                </Typography>

                {user && (
                    <Alert severity="info" sx={{ mb: 2 }}>
                        Зарегистрирован: <strong>{user}</strong>
                    </Alert>
                )}

                <TextField
                    fullWidth
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    sx={{ mb: 2 }}
                />

                <Button
                    fullWidth
                    variant="contained"
                    size="large"
                >
                    Войти
                </Button>
            </Paper>
        </Box>
    )
}

export default Login