import React, { useContext, useEffect, useState } from 'react'
import './Inicio.css'
import { TokenContext } from '../../providers/TokenProvider'

const Inicio = () => {
  const [profile, setProfile] = useState()
  const { token } = useContext(TokenContext)
  console.log(token)

  useEffect(() => {
    if (token) {
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => res.json())
        .then((res) => setProfile(res))
    } else {
      console.log('No dispones de token de acceso')
    }
  }, [token])

  return (
    <div>
      {console.log(profile)}

      {profile ? (
        <div>
          <h1>Bienvenido, {profile.display_name}</h1>
        </div>
      ) : (
        <p>Cargando información del perfil...</p>
      )}
    </div>
  )
}

export default Inicio
