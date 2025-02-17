const CLIENT_ID = '72da854640234c3f8f13b79561eee180'
const REDIRECT_URI = 'http://127.0.0.1:8000/callback'
const SCOPES = [
  'user-read-private',
  'user-read-email',
  'user-top-read',
  'user-library-read',
  'playlist-read-private'
  // Agrega más scopes según lo que necesites
]

export const getSpotifyAuthUrl = () => {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(SCOPES.join(' '))}`
  return authUrl
}
