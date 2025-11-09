import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/slices/authSlice'

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
        <div>
            <h1>Регистрация</h1>

            {user && (
                <div>
                    Зарегистрирован: <strong>{user}</strong>
                </div>
            )}
            <div>
                <input
                    type="text"
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <button onClick={handleRegister}>Зарегистрироваться</button>
        </div>
    )
}

export default Register