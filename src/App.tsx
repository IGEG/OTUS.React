import { Provider } from 'react-redux'
import { store } from './store/store'
import Login from './Components/Login'
import './App.css'
import {
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom"
import HomePage from './Components/HomePage'
import Register from './Components/Register'

// Создаем отдельный компонент для содержимого приложения
function AppContent() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to={"/login"}>Вход</Link></li>
          <li><Link to={"/register"}>Регистрация</Link></li>
          <li><Link to={"/"}>Главная</Link></li>
        </ul>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<span>404</span>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App