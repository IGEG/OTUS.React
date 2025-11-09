import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/slices/authSlice'
import { TextField, Button, Box, Paper, Typography, Alert } from '@mui/material'

const Register = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.auth.user)
    const [name, setName] = useState('')

    const handleRegister = () => {
        if (name.trim()) {
            dispatch(register(name))
            setName('')
        }
    }

    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Регистрация
                </Typography>

                {user && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        Уже зарегистрирован: <strong>{user}</strong>
                    </Alert>
                )}

                <TextField
                    fullWidth
                    label="Введите ваше имя"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ mb: 2 }}
                />

                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleRegister}
                    size="large"
                >
                    Зарегистрироваться
                </Button>
            </Paper>
        </Box>
    )
}

export default Register