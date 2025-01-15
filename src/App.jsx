import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Callback from './components/Callback/Callback'
import Inicio from './pages/Inicio/Inicio'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/callback' element={<Callback />} />
        <Route path='/inicio' element={<Inicio />} />
      </Routes>
    </>
  )
}

export default App
