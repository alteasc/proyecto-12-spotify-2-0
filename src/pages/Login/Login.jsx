import { getSpotifyAuthUrl } from '../../utils/authAPI'
import './Login.css'

const Login = () => {
  const handleLogin = () => {
    window.location.href = getSpotifyAuthUrl()
  }

  return (
    <div>
      <h1>Inicia sesión con Spotify</h1>
      <button onClick={handleLogin}>Login con Spotify</button>
    </div>
  )
}

export default Login
