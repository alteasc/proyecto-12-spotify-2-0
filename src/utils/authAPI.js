const getRedirectUri = () => {
  if (window.location.hostname.includes("vercel.app")) {
    return "https://proyecto-12-spotify-2-0.vercel.app/callback";
  } else if (window.location.hostname.includes("netlify.app")) {
    return "https://spotify-2-0.netlify.app/callback";
  } else {
    return "http://localhost:5173/callback"; // Para desarrollo local
  }
}

const CLIENT_ID = '72da854640234c3f8f13b79561eee180'
const REDIRECT_URI = getRedirectUri()
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
