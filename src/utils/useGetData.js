import { useContext, useEffect, useState } from 'react'
import { TokenContext } from '../providers/TokenProvider'

export const useGetData = () => {

  const { token } = useContext(TokenContext)

  const [profile, setProfile] = useState(null)
  const [topArtists, setTopArtists] = useState(null)
  const [topTracks, setTopTracks] = useState(null)
  const [playlists, setPlaylists] = useState(null)
  const [podcasts, setPodcasts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  
  const getData = async (token, url, setData, setIsLoading) => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      setData(data)
      setIsLoading(false)
      return data;
    } catch (error) {
      console.log(`Error en la solicitud de datos de ${url}:`, error);
      setIsLoading(true)
    }
  }

  useEffect(()=>{
    if (token) {
      const fetchData = async () => {
        const profileData = await getData(token, "https://api.spotify.com/v1/me/", setProfile, setIsLoading)
        if (profileData) {
          await Promise.all([
            getData(token, "https://api.spotify.com/v1/me/top/artists?limit=5", setTopArtists, setIsLoading),
            getData(token, "https://api.spotify.com/v1/me/top/tracks?limit=5", setTopTracks, setIsLoading),
            getData(token, "https://api.spotify.com/v1/me/shows?limit=5", setPodcasts, setIsLoading),
            getData(token, `https://api.spotify.com/v1/users/${profileData.id}/playlists?limit=5`, setPlaylists, setIsLoading)
          ])
        }
      }
      fetchData()
    }
  }, [token])
  return {
    profile,
    topArtists,
    topTracks,
    playlists,
    podcasts,
    isLoading
  }
}
