import React, { useContext, useEffect } from 'react'
import './Callback.css'
import { TokenContext } from '../../providers/TokenProvider'

const Callback = () => {
  const { saveToken } = useContext(TokenContext)

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const params = new URLSearchParams(hash.substring(1)) // Quita el '#'
      const accessToken = params.get('access_token')

      if (accessToken) {
        saveToken(accessToken)
        console.log(accessToken)

        setTimeout(() => {
          window.location.href = '/inicio' // Redirige a la página principal
        }, 5000)
      }
    }
  }, [saveToken])
  return <div>Procesando autenticación...</div>
}

export default Callback
