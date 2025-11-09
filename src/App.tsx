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
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

function AppContent() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Тоси-боси
            </Typography>
            <Button color="inherit" component={Link} to="/login">
              Вход
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Регистрация
            </Button>
            <Button color="inherit" component={Link} to="/">
              Главная
            </Button>
          </Toolbar>
        </AppBar>

        <Box sx={{ padding: 2 }}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="*" element={<span>404</span>} />
          </Routes>
        </Box>
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