import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Callback from './components/Callback/Callback'
import Inicio from './pages/Inicio/Inicio'
import FavsPlaylist from './pages/NewPlaylist/NewPlaylist'

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/callback' element={<Callback />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/favs-playlist' element={<FavsPlaylist />}/>
    </Routes>
    </>
  )
}

export default App
