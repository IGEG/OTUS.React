import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/slices/authSlice'

const HomePage = () => {
    const user = useSelector((state: any) => state.auth.user)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Основная страница</h1>

            {user && (
                <div>
                    <button onClick={() => dispatch(logout())} style={{ marginLeft: '10px' }}>Выйти</button>
                </div>
            )}

            {user ? (
                <div>
                    <p>Привет, {user}!</p>
                </div>
            ) : (
                <p>Никто не зарегистрирован. Зарегистрируйтесь!</p>
            )}
        </div>
    )
}

export default HomePage