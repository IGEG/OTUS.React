import { useSelector } from 'react-redux'

const Login = () => {
    const user = useSelector((state: any) => state.auth.user)  // Получаем имя

    return (
        <div>
            <h1>Вход</h1>

            {user && <p>Зарегистрирован: {user}</p>}

            <input type="password" placeholder="Введите пароль" />
            <button>Войти</button>
        </div>
    )
}

export default Login