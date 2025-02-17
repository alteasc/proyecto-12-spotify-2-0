import { Heading, Button, Tooltip, Flex } from '@chakra-ui/react'
import { getSpotifyAuthUrl } from '../../utils/authAPI'

const Login = () => {
  const handleLogin = () => {
    window.location.href = getSpotifyAuthUrl()
  }

  return (
      <Flex
      flexDir="column"
      p="var(--spo-padding-m)" 
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      gap="var(--spo-gap-l)"
      >
        <Heading >Registra tu cuenta de Spotify</Heading>
        <Tooltip hasArrow label="Serás redirigido para autenticar los datos de tu cuenta de Spotify" textAlign="center" bg="var(--spo-color-1)">
          <Button onClick={handleLogin} color="var(--spo-color-1)" minW="40%" whiteSpace="wrap">Haz login con Spotify</Button>
        </Tooltip>
      </Flex>
  )
}

export default Login
