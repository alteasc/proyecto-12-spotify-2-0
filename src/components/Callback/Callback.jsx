import React, { useContext, useEffect } from 'react'
import { TokenContext } from '../../providers/TokenProvider'
import { useNavigate } from 'react-router-dom'
import { Box, Heading, Spinner } from '@chakra-ui/react'

const Callback = () => {
  const { saveToken } = useContext(TokenContext)
  const navigate = useNavigate()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const params = new URLSearchParams(hash.substring(1)) // Quita el '#'
      const accessToken = params.get('access_token')

      if (accessToken) {
        saveToken(accessToken)
        //console.log(accessToken)

        setTimeout(() => {
          navigate('/inicio')  // Redirige a la página principal
        }, 2000)
      }
    }
  }, [saveToken])
  return <Box minH="100vh" display="flex" justifyContent="center" alignItems="center" flexDir="column" gap="var(--spo-gap-m)">
    <Heading m="var(--spo-margin-xl)">Procesando autenticación...</Heading>
      <Spinner
      thickness='6px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      />
    </Box>
}

export default Callback
