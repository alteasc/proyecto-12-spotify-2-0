export const getDataSearch = (dispatch, token, inputSearch) => {
  dispatch({type: "GET_SEARCH", payload: inputSearch})

  fetch(`https://api.spotify.com/v1/search?q=${inputSearch}&type=track&limit=30`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((dataSearch) => dataSearch.json())
    .then((dataSearch) => {
      dispatch({ type: "GET_DATA", payload: dataSearch})
      dispatch({ type: "SET_LOADING"})
    }
    )
}

export const toggleLikeAndTracks = (dispatch, track, state) => {
  const likedTrack = {
    ...state.likeTracks,
    [track.id]: !state.likeTracks[track.id]
  }
  dispatch({ type: "ADD_LIKE_TRACKS" , payload: likedTrack})

  const trackInPlaylist = state.tracksPlaylist.some((item) => item.id === track.id)
  const updateTracks = trackInPlaylist ? state.tracksPlaylist.filter((item) => item.id !== track.id) : [...state.tracksPlaylist, track]

  dispatch({ type: "CONTROL_TRACKS", payload: updateTracks })
}

